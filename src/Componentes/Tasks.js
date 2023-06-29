import React from 'react'
import Task from './Task'

function Tasks() {
    const tarefas = ['uma', 'duas', 'tres']
    return (
        <div>
            <h1>Tasks</h1>
            <Task tarefas={tarefas} />
        </div>
    )
}

export default Tasks
