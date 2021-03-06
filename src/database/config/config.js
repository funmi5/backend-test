require('dotenv').config();

module.exports = {
  production: {
    url: process.env.DATABASE_URL,
    dialect: 'postgres',
  },
  development: {
    url: process.env.DEV_DATABASE_URL,
    dialect: 'postgres',
  },
  test: {
    url: process.env.TEST_DATABASE_URL,
    dialect: 'postgres',
  },
};
