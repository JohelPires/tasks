import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Alert, Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

function Register() {
    const [user, setUser] = useState('')
    const [senha, setSenha] = useState('')
    const [confsenha, setConfsenha] = useState('')
    const [email, setEmail] = useState('')
    const [fullname, setFullname] = useState('')
    // const [newUser, setNewUser] = useState({})
    // const [checkbox, setCheckbox] = useState(false)
    const [erro, setErro] = useState('')
    const navigate = useNavigate()

    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm()

    function registra(data) {
        // console.log(data)
        axios
            .post('http://localhost:5000/usuario/registrar', {
                nome: data.nome,
                email: data.email,
                senha: data.senha,
            })
            .then((data) => {
                console.log(data)
                window.alert('Usuário registrado com sucesso!')
                navigate('/')
            })
            .catch((err) => console.log(err))
    }

    function validasenha() {
        if (confsenha === senha) {
            return true
        } else {
            return 'Senhas não conferem.'
        }
    }

    return (
        <Form className='col-md col-2 mx-auto mt-5' noValidate validated={!!errors} onSubmit={handleSubmit(registra)}>
            <h1>Registrar</h1>
            {erro && (
                <Alert variant='danger'>
                    <h6>{erro}</h6>
                </Alert>
            )}
            <Form.Group className='mb-3' controlId='formFullName'>
                <Form.Label>Nome completo:</Form.Label>
                <Form.Control
                    // onChange={(e) => setFullname(e.target.value)}
                    // value={fullname}
                    type='text'
                    isInvalid={errors.nome}
                    required
                    placeholder='Digite um nome de usuário'
                    {...register('nome', { required: 'Por favor digite o seu nome.' })}
                />

                {errors.nome && <Form.Control.Feedback>{errors.nome.message}</Form.Control.Feedback>}
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label>Email:</Form.Label>
                <Form.Control
                    name='email'
                    id='email'
                    required
                    isInvalid={errors.email}
                    placeholder='Digite seu Email'
                    {...register('email', {
                        required: 'Por favor digite o seu email.',
                        pattern: {
                            value: /^\S+@\S+$/i,
                            message: 'E-mail inválido',
                        },
                    })}
                />
                {errors.email && <Form.Control.Feedback>{errors.email.message}</Form.Control.Feedback>}
            </Form.Group>

            <Form.Group className='mb-3' controlId='formBasicPassword'>
                <Form.Label>Senha</Form.Label>
                <Form.Control
                    type='password'
                    placeholder='Senha'
                    onChange={(e) => setSenha(e.target.value)}
                    required
                    {...register('senha', {
                        required: { value: true, message: 'Por favor digite uma senha' },
                        minLength: { value: 3, message: 'Senha deve ter no mínimo 3 caracteres.' },
                    })}
                />
                {errors.senha && <Form.Control.Feedback>{errors.senha.message}</Form.Control.Feedback>}
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicPassword'>
                <Form.Label>Senha</Form.Label>
                <Form.Control
                    type='password'
                    placeholder='Senha'
                    required
                    onChange={(e) => setConfsenha(e.target.value)}
                    {...register('confirmasenha', {
                        required: { value: true, message: 'Por favor confirme sua senha' },
                        minLength: { value: 3, message: 'Senha deve ter no mínimo 3 caracteres.' },
                        validate: validasenha,
                    })}
                />
                {errors.confirmasenha && <Form.Control.Feedback>{errors.confirmasenha.message}</Form.Control.Feedback>}
            </Form.Group>

            <Button variant='primary' type='submit'>
                Registrar
            </Button>
            <br />
            <br />
            {/* <Alert variant="secondary">Experimente a aplicação com o usuario johel e a senha 123</Alert> */}
        </Form>
    )
}

export default Register
