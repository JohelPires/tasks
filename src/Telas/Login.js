import React, { useState } from 'react'
import './login.css'

function Login() {
    const [nome, setNome] = useState('')
    const [senha, setSenha] = useState('')
    const [loginData, setLoginData] = useState({})

    function handleSubmit(e) {
        e.preventDefault()
        setLoginData({ nome: nome, senha: senha })
        console.log(loginData)
    }

    return (
        <div class="login-container">
            <h2>Fazer Login:</h2>
            <form>
                <label for="username">Nome do usuário:</label>
                <br />
                <input type="text" id="username" name="username" required onChange={(e) => setNome(e.target.value)} />
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
