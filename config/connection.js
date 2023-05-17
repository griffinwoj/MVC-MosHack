const Sequelize = require('sequelize');
require('dotenv').config(); // Import sensitive data from .env

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    "bucket_db",
    "root",
    "password",


    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  );
}
