const config = require("./db_config"),
  sql = require("mssql");

const getEmployees = async () => {
  try {
    let pool = await sql.connect(config);
    let employees = pool.request().query("SELECT * FROM employees");
    console.log(employees);

    return employees;
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getEmployees,
};
