import React from 'react'
import './task.css'

function Task({ tarefas }) {
    return (
        <div className="task-container">
            <h2>{tarefas[0]}</h2>

            <div className="controls">
                <p>edit</p>
                <p>del</p>
                <p>priority</p>
            </div>
        </div>
    )
}

export default Task
