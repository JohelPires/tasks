const { Sequelize, DataTypes } = require('sequelize')
// const sequelize = require('../database/db')

// const Usuario = require('../database/models/usuario') //(sequelize, DataTypes)
const Tarefa = require('../database/models/tarefa') //(sequelize, DataTypes)

function listAll(req, res) {
    Tarefa.findAll({
        where: {
            id_usuario: req.userId,
        },
    })
        .then((result) => {
            res.status(201).json(result)
        })
        .catch((err) => {
            res.status(404).json(err)
        })
}

function addTarefa(req, res) {
    const { titulo, descricao, vencimento, status } = req.body
    const id_usuario = req.userId
    Tarefa.create({ id_usuario, titulo, descricao, vencimento, status })
        .then((result) => {
            res.status(200).json(result)
        })
        .catch((err) => {
            res.status(400).json(err)
        })
}

function findId(req, res) {
    const { id } = req.params
    Tarefa.findByPk(id)
        .then((result) => {
            res.status(200).json(result)
        })
        .catch((err) => {
            res.status(400).json(err)
        })
}

function update(req, res) {
    const { id } = req.params
    Tarefa.update(req.body, {
        where: {
            id: parseInt(id),
        },
    })
        .then((result) => {
            if (result[0]) {
                res.status(200).json('Tarefa atualizada.')
            } else {
                res.status(404).json('não encontrado.')
            }
        })
        .catch((err) => {
            res.status(400).json(err)
        })
}

function deleta(req, res) {
    const { id } = req.params
    Tarefa.destroy({
        where: {
            id: parseInt(id),
        },
    })
        .then((result) => {
            if (result) {
                res.status(200).json('Tarefa deletada com sucesso.')
            } else {
                res.status(404).json('não encontrado.')
            }
        })
        .catch((err) => {
            res.status(400).json(err)
        })
}

module.exports = { listAll, addTarefa, findId, update, deleta }
