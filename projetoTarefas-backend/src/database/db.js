const Sequelize = require('sequelize')

const sequelize = new Sequelize('aula16', 'postgres', '123', {
    dialect: 'postgres',
    host: 'localhost',
})

module.exports = sequelize
