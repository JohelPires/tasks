import React from 'react'
import './AddTask.css'

function AddTask() {
    return (
        <>
            <h1>Adicionar Tarefa</h1>
            <div className="add-task-container">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <input type="text" placeholder="Título da tarefa"></input>
                    <input className="date-input" type="date"></input>
                </div>
                <input type="text" placeholder="Descrição da tarefa"></input>
                <button>Adicionar</button>
            </div>
        </>
    )
}

export default AddTask
