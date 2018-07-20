var mysql = require("mysql");

var pool = mysql.createPool({
  connectionLimit: 10,
  host: "",
  user: "root",
  password: "",
  port: "",
  database: ""
});

var resMap = {};

pool.query(
  "SELECT loan_application_status,count(*) FROM loan_application INNER JOIN tenant on tenant.id=loan_application.tenant_id where secondary_domain='client2.lendingmantrasandbox.com' group by loan_application_status",
  function(error, result) {
    if (error) {
      console.log(error);
    } else {
      resMap = result;
      console.log("The solution is: ", result);
      console.log(JSON.stringify(resMap));
    }
  }
);
