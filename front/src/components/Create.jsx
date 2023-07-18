import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Form, Button, FormGroup, Container, Col, Row, FormControl } from 'react-bootstrap'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Create() {
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

    const postData = () => {
        axios
            .post('https://64b03fbdc60b8f941af5776c.mockapi.io/fakeData', {
                firstName,
                lastName,
                checkbox,
            })
            .then(() => navigate('/'))
    }

    //     const postData = () => {
    //       console.log(firstName);
    //       console.log(lastName);
    //       console.log(checkbox);
    // }

    return (
        <div className='col-md mx-auto'>
            <Container fluid className='p-5'>
                <Row className='justify-content-center'>
                    <Form noValidate validated={!!errors} onSubmit={handleSubmit(onSubmit)}>
                        <FormGroup as={Col} sm className='mb-3'>
                            <Form.Label>Nome</Form.Label>
                            <FormControl
                                name='firstName'
                                type='text'
                                placeholder='Nome'
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup as={Col} sm className='mb-3'>
                            <Form.Label>Sobrenome</Form.Label>
                            <FormControl
                                name='lastName'
                                type='text'
                                placeholder='Sobrenome'
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Form.Check
                                name='checkbox'
                                type='checkbox'
                                label='Concordo com todos os serviços.'
                                onChange={(e) => setCheckbox(!checkbox)}
                            />
                        </FormGroup>
                        <Button onClick={postData} type='submit'>
                            Submit
                        </Button>
                    </Form>
                </Row>
            </Container>
        </div>
    )
}
