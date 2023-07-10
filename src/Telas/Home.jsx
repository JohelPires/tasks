import React from 'react'
import { Link } from 'react-router-dom'
// import '../App.css'

function Home() {
    function fetchData(loginData) {
        const requestOptions = {
            method: 'POST',
            body: JSON.stringify(loginData),
            headers: new Headers({ 'Content-Type': 'application/json', Accept: 'application/json' }),
        }
        fetch('http://localhost:5000/usuario/login', requestOptions)
            .then((response) => response.json())
            .then((data) => {
                if (data.erro) {
                    alert(data.erro)
                } else {
                    console.log(data.accessToken)
                    console.log('teste')
                    setToken(data.accessToken)
                }
            })
            .catch((err) => console.log(err))
    }

    return (
        <section className="hero">
            <div className="hero-content">
                <h1>Tarefas</h1>
                <p>Full Stack Developer</p>
                <p>Passionate about creating innovative web solutions.</p>
                <br />
                <br />
                <Link className="button" to="sobre">
                    Sobre
                </Link>
            </div>
        </section>
    )
}

export default Home
