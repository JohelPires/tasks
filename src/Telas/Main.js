import React from 'react'
import Tasks from '../Componentes/Tasks'
import './main.css'
import AddTask from '../Componentes/AddTask'

function Main() {
    return (
        <div>
            <div className="navbar">Navbar</div>
            {/* <Tasks /> */}
            <AddTask />
        </div>
    )
}

export default Main
