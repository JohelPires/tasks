import React from 'react'
import Task from './Task'
import './tasks.css'

function Tasks() {
    const tarefas = [
        {
            status: false,
            id: 1,
            id_usuario: 1,
            titulo: 'Ir ao mercado',
            descricao: 'Fazer tal e tal coisa é importante e necessário por tal e tal motivo.',
            vencimento: '2023-09-09',
            updatedAt: '2023-06-22T12:41:58.797Z',
            createdAt: '2023-06-22T12:41:58.797Z',
        },
        {
            status: false,
            id: 2,
            id_usuario: 1,
            titulo: 'Fazer tal coisa',
            descricao: 'Fazer tal e tal coisa é importante e necessário por tal e tal motivo.',
            vencimento: '2023-09-09',
            updatedAt: '2023-06-22T12:41:58.797Z',
            createdAt: '2023-06-22T12:41:58.797Z',
        },
        {
            status: false,
            id: 3,
            id_usuario: 1,
            titulo: 'Tal e tal',
            descricao: 'Fazer tal e tal coisa é importante e necessário por tal e tal motivo.',
            vencimento: '2023-09-09',
            updatedAt: '2023-06-22T12:41:58.797Z',
            createdAt: '2023-06-22T12:41:58.797Z',
        },
        {
            status: false,
            id: 4,
            id_usuario: 1,
            titulo: 'Tarefa numero 4',
            descricao: 'Fazer tal e tal coisa é importante e necessário por tal e tal motivo.',
            vencimento: '2023-09-09',
            updatedAt: '2023-06-22T12:41:58.797Z',
            createdAt: '2023-06-22T12:41:58.797Z',
        },
        {
            status: false,
            id: 5,
            id_usuario: 1,
            titulo: 'Esse é um exemplo de uma tarefa bem longa cujo texto ultrapassa o tamanho do div',
            descricao: 'Fazer tal e tal coisa é importante e necessário por tal e tal motivo.',
            vencimento: '2023-09-09',
            updatedAt: '2023-06-22T12:41:58.797Z',
            createdAt: '2023-06-22T12:41:58.797Z',
        },
    ]

    return (
        <div>
            <div className="tarefas-header">
                <h1>Tarefas</h1>
                <button className="add-task">+</button>
            </div>
            {tarefas.map((tarefa) => {
                // if (tarefa.length > 40) {
                //     tarefa = tarefa.slice(0, 40)
                // }
                return <Task tarefa={tarefa} />
            })}
        </div>
    )
}

export default Tasks
