const Sequelize = require('sequelize');

const sequelize = new Sequelize('Learning', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false
});

try {
  sequelize.authenticate();
  console.log('Successfully connected');
} catch (error) {
  console.error('Database Connection', error);
}

module.exports = {
  sequelize
};
