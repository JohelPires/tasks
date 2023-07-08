const express = require('express')
const { Sequelize } = require('sequelize')
const sequelize = require('./src/database/db')
const app = express()
require('dotenv').config()
const Usuario = require('./src/database/models/usuario')
const Tarefa = require('./src/database/models/tarefa')
const RotasUsuario = require('./src/rotas/rotasUsuario')
const RotasTarefa = require('./src/rotas/rotasTarefa')

const PORT = process.env.PORT || 5000

const cors = require('cors')
app.use(
    cors({
        origin: '*',
    })
)

app.use(express.json())

app.use('/usuario', RotasUsuario)
app.use('/tarefa', RotasTarefa)

sequelize
    .sync({ alter: true, logging: false })
    .then((result) => {
        console.log('Banco de dados sincronizado')
        app.listen(PORT, () => {
            console.log(`Servidor rodando na porta ${PORT}`)
        })
    })
    .catch((err) => {
        console.log(err)
    })
