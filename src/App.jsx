import { Link, Route, Routes } from 'react-router-dom'
import './App.css'

import Home from './Telas/Home'

import Sobre from './Telas/Sobre'
import Login from './Telas/Login'
import { useState } from 'react'
import Nav from './Componentes/Nav'

function App() {
    const [token, setToken] = useState('')
    const [usuario, setUsuario] = useState('')

    return (
        <div className="App">
            {token ? (
                <>
                    <Nav usuario={usuario} />
                    <main className="container">
                        <Routes>
                            <Route path="/" element={<Home token={token} />} />
                            <Route path="sobre" element={<Sobre />} />
                        </Routes>
                    </main>
                </>
            ) : (
                <Login setToken={setToken} setUsuario={setUsuario} />
            )}
        </div>
    )
}

export default App
