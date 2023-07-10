import React from 'react'
import { Link } from 'react-router-dom'

function Contato() {
    return (
        <div>
            <h1>Informações de Contato</h1>
            <p>Telefone: (65) 98412-2089 / (31) 99712-1185</p>
            <p>
                Email: <a href="mailto:johelpires@gmail.com">johelpires@gmail.com</a>
            </p>
            <Link className="button" to="/">
                Voltar ao inicio
            </Link>
        </div>
    )
}

export default Contato
