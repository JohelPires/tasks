const { Sequelize, DataTypes } = require('sequelize')
const sequelize = require('../db')
const Usuario = require('../models/usuario')

const Tarefa = sequelize.define(
    'tarefa',
    {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        id_usuario: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Usuario,
                key: 'id',
            },
        },
        titulo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        descricao: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        vencimento: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        status: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
    },
    { freezeTableName: true }
)
Tarefa.associate = function (models) {
    Tarefa.belongsTo(models.Usuario, { foreignKey: 'id_usuario', as: 'usuario' })
}

module.exports = Tarefa
