const env_const = process.env;
const config = {
  user: ,
  password: env_const.DB_PASSWORD,
  server: env_const.SV_NAME,
  database: env_const.DB_NAME,
  options: {
    trustServerCertificate: true,
    trustedConnection: false,
    enableArithAbort: true,
    instancename: env_const.DB_INSTANCENAME,
  },
  port: env_const.PORT,
};
module.exports = config;
