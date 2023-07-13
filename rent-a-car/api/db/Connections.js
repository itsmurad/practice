
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres://rentuser:rentpassword@localhost:5432/rentdb');

  const Connect = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
  }
  
module.exports = Connect;

  