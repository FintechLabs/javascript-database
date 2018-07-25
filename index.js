var mysql = require("mysql");

var databaseConfigMap = {};
databaseConfigMap["development"] = {
  connectionLimit: 10,
  host: "",
  user: "",
  password: "",
  port: "",
  database: ""
};

var pool = mysql.createPool(databaseConfigMap["development"]);

var resMap = {};

pool.query(
  "SELECT loan_application_status,count(*) FROM loan_application INNER JOIN tenant on tenant.id=loan_application.tenant_id where domain='dev1.p2pforce.com' group by loan_application_status",
  function(error, result) {
    if (error) {
      console.log(error);
    } else {
      resMap = result;
      console.log("The solution is: ", result);
    }
  }
);
