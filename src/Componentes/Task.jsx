import React, { useState } from 'react'
import './task.css'

function Task({ tarefa }) {
    const [show, setShow] = useState(false)
    return (
        <div key={tarefa.id} className="task-container">
            <div className="task-main">
                <button onClick={() => !tarefa.status}>{tarefa.status ? 'x' : '-'}</button>
                <h3 style={tarefa.descricao && { cursor: 'pointer' }} onClick={() => setShow((prev) => !prev)}>
                    {tarefa.titulo.length > 40 ? tarefa.titulo.slice(0, 40) + '...' : tarefa.titulo}
                </h3>
                <p>{tarefa.vencimento}</p>
                <div className="controls">
                    <p>edit</p>
                    <p>del</p>
                    <p>priority</p>
                </div>
            </div>
            <div style={{ display: show ? 'block' : 'none' }}>
                {/* <div style={{ height: show ? '200px' : '100px' }}> */}
                <p>{tarefa.descricao}</p>
            </div>
        </div>
    )
}

export default Task
