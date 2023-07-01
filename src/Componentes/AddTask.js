import React from 'react'
import './AddTask.css'

function AddTask() {
    return (
        <>
            <h1>Adicionar Tarefa</h1>
            <div className="add-task-container">
                <input type="text" placeholder="Título da tarefa"></input>
                <div className="add-task-date">
                    <h5>Vencimento:</h5>
                    <input className="date-input" type="date"></input>
                </div>
                <button>Adicionar</button>
            </div>
        </>
    )
}

export default AddTask
