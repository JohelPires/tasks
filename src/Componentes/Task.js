import React from 'react'
import './task.css'

function Task({ tarefa }) {
    return (
        <div className="task-container">
            <h2>{tarefa.titulo.length > 40 ? tarefa.titulo.slice(0, 40) + '...' : tarefa.titulo}</h2>

            <div className="controls">
                <p>edit</p>
                <p>del</p>
                <p>priority</p>
            </div>
        </div>
    )
}

export default Task
