import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Experiencias({ setLogado }) {
    return (
        <div class="login-container">
            <h2>Educação</h2>
            <ul>
                <li>Pós-graduação em Desenvolvimento Full-Stack pela Unemat (em curso)</li>
                <li>Análise e Desenvolvimento de Sistemas pela Universidade de Cuiabá (em curso)</li>
                <li>Bacharelado em Psicologia pela Universidade Federal de Minas Gerais - 2016</li>
            </ul>
            <h2>Especializações</h2>
            <ul>
                <li>
                    Databases for Data Scientists
                    <br />
                    Universidade do Colorado em Boulder - Coursera, 2023
                    <br />
                    <a href="https://www.coursera.org/account/accomplishments/specialization/3K9VGGF3HK3Q">
                        https://www.coursera.org/account/accomplishments/specialization/3K9VGGF3HK3Q
                    </a>
                </li>
                <li>
                    Oracle SQL Databases
                    <br />
                    LearnQuest - Coursera, 2023
                    <br />
                    <a href="https://www.coursera.org/account/accomplishments/specialization/FUP33WNUYA68">
                        https://www.coursera.org/account/accomplishments/specialization/FUP33WNUYA68
                    </a>
                </li>
            </ul>
            <h2>Certificações</h2>
            <ul>
                <li>
                    Advanced Topics and Future Trends in Database Technologies
                    <br />
                    University of Colorado Boulder - Coursera, 2023
                </li>
                <li>
                    Advanced MySQL Topics
                    <br />
                    Meta - Coursera, 2023
                </li>
                <li>
                    Advanced Data Modeling
                    <br />
                    Meta - Coursera, 2023
                </li>
                <li>
                    The Structured Query Language (SQL)
                    <br />
                    University of Colorado Boulder - Coursera, 2023
                </li>
                <li>
                    Python for Data Science, AI & Development
                    <br />
                    IBM - Coursera, 2023
                </li>
                <li>
                    Database Structures and Management with MySQL
                    <br />
                    Meta - Coursera, 2023
                </li>
                <li>
                    Oracle SQL Proficiency
                    <br />
                    Coursera, 2023
                </li>
                <li>
                    Data Analysis with Python
                    <br />
                    freeCodeCamp, 2022
                </li>
                <li>
                    Modelagem de Dados
                    <br />
                    Fundação Bradesco Escola Virtual, 2022
                </li>
                <li>
                    Scientific Computing with Python
                    <br />
                    freeCodeCamp, 2022
                </li>
                <p>
                    Veja outras certificações no meu{' '}
                    <a href="https://www.linkedin.com/in/johel-pires-44a349155/">LinkedIn</a>
                </p>
            </ul>
            <h2>Habilidades</h2>
            <ul>
                <li>Programação em Python</li>
                <li>Pré-processamento e limpeza de dados</li>
                <li>Análise exploratória de dados</li>
                <li>Algoritmos de aprendizado de máquina</li>
                <li>Visualização de dados em python e tableau</li>
                <li>SQL e gerenciamento de bancos de dados</li>
                <li>Análise estatística</li>
                <li>Habilidades de resolução de problemas</li>
                <li>Colaboração em equipe</li>
            </ul>
            <h2>Idiomas</h2>
            <ul>
                <li>Inglês (Fluente)</li>
                <li>Espanhol (Intermediário)</li>
            </ul>
        </div>
    )
}

export default Experiencias
