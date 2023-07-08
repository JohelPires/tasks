import React from 'react'
import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

function Sobre() {
    return (
        <div>
            <Link className="icon" to="https://www.linkedin.com/in/johel-pires-44a349155/">
                {' '}
                <FaLinkedin />
            </Link>
            <Link className="icon" to="https://github.com/JohelPires">
                {' '}
                <FaGithub />
            </Link>
            <div className="login-container">
                <h2>Sobre mim</h2>
                <p>
                    Profissional altamente motivado, com paixão por aprender e grande interesse em ciência de dados e
                    machine learning. Desejo aplicar meu conhecimento adquirido por meio de várias certificações para
                    contribuir em projetos baseados em dados. Excelentes habilidades de resolução de problemas e
                    dedicação em trabalhar em equipe.
                </p>
            </div>
        </div>
    )
}

export default Sobre
