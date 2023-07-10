import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Projetos from './Telas/Projetos'
import Home from './Telas/Home'
import Experiencias from './Telas/Experiencias'
import Contato from './Telas/Contato'
import Sobre from './Telas/Sobre'
import Login from './Telas/Login'
import { useState } from 'react'

function App() {
    const [token, setToken] = useState('')

    return (
        <div className="App">
            {token ? (
                <>
                    <nav className="navbar">
                        <Link to="/">Home</Link>
                        <Link to="sobre">Sobre mim</Link>
                        <Link to="projetos">Projetos</Link>
                        <Link to="experiencias">Experiência</Link>
                    </nav>
                    <main className="container">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="experiencias" element={<Experiencias />} />
                            <Route path="projetos" element={<Projetos />} />
                            <Route path="contato" element={<Contato />} />
                            <Route path="sobre" element={<Sobre />} />
                        </Routes>
                    </main>
                </>
            ) : (
                <Login setToken={setToken} />
            )}
        </div>
    )
}

export default App
