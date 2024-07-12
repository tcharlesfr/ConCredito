const sequelize = require('sequelize');
const database = new  sequelize('dbtestecon_1','teste1','teste1000!2606',
{
    dialect:'mssql',
    host:'26.181.24.39'
});

database.sync();

module.exports = database;
