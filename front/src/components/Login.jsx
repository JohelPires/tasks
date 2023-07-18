import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Alert, Button, Form } from 'react-bootstrap'
import { useNavigate, Link } from 'react-router-dom'

function Login({ isAuth, setIsAuth }) {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [checkbox, setCheckbox] = useState(false)
    const [erro, setErro] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        const AuthLocal = JSON.parse(window.localStorage.getItem('Auth'))
        console.log('LocalStorage Auth: ', AuthLocal)
        if (AuthLocal) {
            setIsAuth(AuthLocal)
            navigate('/')
        }
    }, [])

    function autentica(e) {
        e.preventDefault()
        axios
            .post('http://localhost:5000/usuario/login', { email: email, senha: senha })
            .then((data) => {
                console.log(data.data)
                setIsAuth(data.data)
                if (checkbox) {
                    window.localStorage.setItem('Auth', JSON.stringify(data.data))
                    console.log('saved to localstorage')
                }
                navigate('/')
            })
            .catch((err) => setErro(err.response.data.erro))
        // fetch('https://64b03fbdc60b8f941af5776c.mockapi.io/users')
        //     .then((response) => response.json())
        //     .then((data) => {
        //         data.map((u) => {
        //             if (u.user === user && u.senha === senha) {
        //                 console.log(u)
        //                 setIsAuth({
        //                     user: u.user,
        //                     email: u.email,
        //                     nome: u.nome,
        //                 })
        //                 console.log(isAuth)
        //                 if (checkbox) {
        //                     localStorage.setItem('isAuth', {
        //                         user: u.user,
        //                         email: u.email,
        //                         nome: u.nome,
        //                     })
        //                 }
        //                 navigate('/')
        //             } else {
        //                 console.log('not ok')
        //                 setInv(true)
        //             }
        //             return
        //         })
        //     })
    }

    return (
        <Form className='col-md col-3 mx-auto mt-5' onSubmit={autentica}>
            <h1>Login</h1>
            {erro && <Alert variant='danger'>{erro}</Alert>}
            <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label>E-mail</Form.Label>
                <Form.Control
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    type='email'
                    placeholder='Digite o email.'
                />
                {/* <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text> */}
            </Form.Group>

            <Form.Group className='mb-3' controlId='formBasicPassword'>
                <Form.Label>Senha</Form.Label>
                <Form.Control
                    onChange={(e) => setSenha(e.target.value)}
                    value={senha}
                    type='password'
                    placeholder='Senha'
                />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicCheckbox'>
                <Form.Check
                    onChange={(e) => setCheckbox((prev) => !prev)}
                    type='checkbox'
                    label='Mantenha-me logado.'
                />
            </Form.Group>
            <Button variant='primary' type='submit'>
                Submit
            </Button>
            <br />
            <br />
            <Alert variant='secondary'>
                Novo usuário? <Link to={'/register'}>Registre-se</Link>{' '}
            </Alert>
        </Form>
    )
}

export default Login
