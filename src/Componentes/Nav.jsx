import React from 'react'
import { Link } from 'react-router-dom'
// import '../App.css'

function Nav({ usuario }) {
    return (
        <nav className="navbar">
            <div className="menu-itens">
                <Link to="/">Home</Link>
                <Link to="sobre">Sobre</Link>
            </div>
            {/* <Link to="projetos">Projetos</Link> */}
            {/* <Link to="experiencias">Experiência</Link> */}
            <span>
                {usuario.nome} (<Link>sair</Link>)
            </span>
        </nav>
    )
}

export default Nav
