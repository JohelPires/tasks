import { Link, Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import Create from './components/Create'
import Read from './components/Read'
import Update from './components/Update'
import { Button, ButtonGroup, Stack } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'

function App() {
    const [isAuth, setIsAuth] = useState('')
    const navigate = useNavigate()

    console.log(isAuth)
    return (
        <div className='App'>
            {isAuth && (
                <nav className='bg-dark rounded shadow w-75 text-light p-3 menu'>
                    <Stack direction='horizontal' gap={2}>
                        <Link to={'/'}>
                            <h2>Tarefas App</h2>
                        </Link>
                        <Link className='ms-auto p-2' to={'/'}>
                            Listar
                        </Link>
                        <Link className='p-3' to={'/create'}>
                            Novo item
                        </Link>
                        Bem vindo, {isAuth.usuario.nome}
                        <ButtonGroup>
                            <Button
                                variant='outline-light'
                                size='sm'
                                onClick={() => {
                                    setIsAuth('')
                                    localStorage.clear()
                                }}
                            >
                                Logout
                            </Button>
                            <Button
                                variant='outline-light'
                                size='sm'
                                onClick={() => {
                                    navigate('/profile')
                                }}
                            >
                                Perfil
                            </Button>
                        </ButtonGroup>
                    </Stack>
                </nav>
            )}
            <Routes>
                <Route path='/' element={isAuth ? <Read isAuth={isAuth} /> : <Navigate to={'/login'} />} />
                <Route path='create' element={isAuth ? <Create isAuth={isAuth} /> : <Navigate to={'/login'} />} />
                <Route path='profile' element={isAuth ? <Profile isAuth={isAuth} /> : <Navigate to={'/login'} />} />

                <Route path='login' element={<Login isAuth={isAuth} setIsAuth={setIsAuth} />} />
                <Route path='register' element={<Register isAuth={isAuth} setIsAuth={setIsAuth} />} />
            </Routes>
        </div>
    )
}

export default App
