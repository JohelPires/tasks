import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Form, Button, FormGroup, Container, Col, Row, FormControl } from 'react-bootstrap'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Create({ isAuth, setNova, setReload }) {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [checkbox, setCheckbox] = useState(false)
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => console.log(data)
    // console.log(errors)

    const postData = (data) => {
        console.log(isAuth)
        if (data.vencimento === '') {
            data.vencimento = '2023-01-01'
        }
        axios
            .post('http://localhost:5000/tarefa', data, {
                headers: { Authorization: `Bearer ${isAuth.accessToken}` },
            })
            .then((result) => {
                console.log(result)
                setNova(false)
                // navigate('/')
                setReload((prev) => !prev)
            })
            .catch((err) => console.log(err))
    }

    //     const postData = () => {
    //       console.log(firstName);
    //       console.log(lastName);
    //       console.log(checkbox);
    // }

    return (
        <div className="col-md mx-auto">
            <Container fluid className="p-5">
                <Row className="justify-content-center">
                    <Form noValidate validated={!!errors} onSubmit={handleSubmit(postData)}>
                        <FormGroup as={Col} sm className="mb-3">
                            <Form.Label>Título</Form.Label>
                            <FormControl
                                name="titulo"
                                type="text"
                                placeholder="Titulo da tarefa"
                                {...register('titulo')}
                            />
                        </FormGroup>
                        <FormGroup as={Col} sm className="mb-3">
                            <Form.Label>Descrição</Form.Label>
                            <FormControl
                                name="descricao"
                                type="text"
                                placeholder="Descrição"
                                {...register('descricao')}
                            />
                        </FormGroup>
                        <FormGroup as={Col} sm className="mb-3">
                            <Form.Label>Vencimento</Form.Label>
                            <FormControl name="vencimento" type="date" {...register('vencimento')} />
                        </FormGroup>
                        <Button type="submit">Submit</Button>
                    </Form>
                </Row>
            </Container>
        </div>
    )
}
