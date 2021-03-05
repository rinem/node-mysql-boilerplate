require("dotenv/config");
module.exports = {
  development: {
    databases: {
      xml_gen: {
        database: process.env.MYSQL_DB,
        username: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASS,
        host: process.env.MYSQL_HOST,
        port: process.env.MYSQL_PORT,
        dialect: "mysql",
      },
    },
  },
  production: {
    databases: {
      xml_gen: {
        database: process.env.MYSQL_DB,
        username: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASS,
        host: process.env.MYSQL_HOST,
        port: process.env.MYSQL_PORT,
        dialect: "mysql",
      },
    },
  },
};
