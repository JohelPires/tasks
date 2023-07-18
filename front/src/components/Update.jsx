import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Form, Button, FormGroup, Container, Col, Row, FormControl, Stack } from 'react-bootstrap'
import axios from 'axios'

export default function Update({ item, setEdit, setReload }) {
    const [firstName, setFirstName] = useState(item.firstName)
    const [lastName, setLastName] = useState(item.lastName)
    const [checkbox, setCheckbox] = useState(item.checkbox)

    const updateData = () => {
        console.log(item.id, { firstName, lastName, checkbox })
        axios
            .put(`https://64b03fbdc60b8f941af5776c.mockapi.io/fakeData/${item.id}`, {
                firstName,
                lastName,
                checkbox,
            })
            .then((data) => {
                console.log(data)
                setReload((prev) => !prev)
            })
        setEdit(false)
        setReload((prev) => !prev)
    }

    //     const postData = () => {
    //       console.log(firstName);
    //       console.log(lastName);
    //       console.log(checkbox);
    // }

    return (
        <div className='col-12'>
            <Container fluid className='p-0'>
                <Row className='justify-content-center'>
                    <Form noValidate>
                        <FormGroup as={Col} sm className='mb-3'>
                            <Form.Label>Nome</Form.Label>
                            <FormControl
                                value={firstName}
                                size='sm'
                                name='firstName'
                                type='text'
                                placeholder='Nome'
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup as={Col} sm className='mb-3'>
                            <Form.Label>Sobrenome</Form.Label>
                            <FormControl
                                size='sm'
                                name='lastName'
                                type='text'
                                placeholder='Sobrenome'
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Form.Check
                                value={checkbox}
                                size='sm'
                                name='checkbox'
                                type='checkbox'
                                label='Concordo com todos os serviços.'
                                onChange={(e) => setCheckbox(!checkbox)}
                            />
                        </FormGroup>
                        <Stack gap={2} direction='horizontal'>
                            <Button
                                variant='outline-primary'
                                size='sm'
                                className='ms-auto'
                                onClick={updateData}
                                // type='submit'
                            >
                                Ok
                            </Button>
                            <Button onClick={() => setEdit(false)} variant='outline-secondary' size='sm' type='submit'>
                                Cancel
                            </Button>
                        </Stack>
                    </Form>
                </Row>
            </Container>
        </div>
    )
}
