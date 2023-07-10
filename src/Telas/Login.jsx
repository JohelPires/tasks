import React, { useState } from 'react'
import './login.css'

function Login({ setToken }) {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [loginData, setLoginData] = useState({})

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
                    setToken(data.accessToken)
                }
            })
            .catch((err) => console.log(err))
    }

    function handleSubmit(e) {
        e.preventDefault()
        setLoginData({ email, senha })
        console.table(loginData)
        fetchData(loginData)
    }

    return (
        <div className="login-container">
            <h2>Fazer Login:</h2>
            <form>
                <label htmlFor="email">Email:</label>
                <br />
                <input type="text" id="email" name="email" required onChange={(e) => setEmail(e.target.value)} />
                <br />
                <br />
                <label for="password">Senha:</label>
                <br />
                <input
                    type="password"
                    id="password"
                    name="password"
                    required
                    onChange={(e) => setSenha(e.target.value)}
                />
                <br />
                <br />
                <div class="button-div">
                    <button onClick={handleSubmit}>Login</button>
                </div>
            </form>
            <a href="#">Esqueceu a senha?</a>
            <br />
            <a href="#">Registrar novo usuário</a>
        </div>
    )
}

export default Login
