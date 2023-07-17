import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Form, Button, FormGroup, Container, Col, Row, FormControl, Stack } from 'react-bootstrap'
import axios from 'axios'

export default function Update({ item, setEdit, setReload, isAuth }) {
    const [titulo, setTitulo] = useState(item.titulo)
    const [descricao, setDescricao] = useState(item.descricao)
    const [vencimento, setVencimento] = useState(item.vencimento)
    // const [status, setStatus] = useState(item.status)

    const updateData = () => {
        console.log(item.id, { titulo, descricao, vencimento })
        axios
            .put(`http://localhost:5000/tarefa/${item.id}`, {
                titulo,
                descricao,
                vencimento,
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
        <div className="col-12">
            <Container fluid className="p-0">
                <Row className="justify-content-center">
                    <Form noValidate>
                        <FormGroup as={Col} sm className="mb-3">
                            <Form.Label>Nome</Form.Label>
                            <FormControl
                                value={titulo}
                                size="sm"
                                name="titulo"
                                type="text"
                                placeholder="Nome"
                                onChange={(e) => setTitulo(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup as={Col} sm className="mb-3">
                            <Form.Label>Descrição</Form.Label>
                            <FormControl
                                size="sm"
                                name="lastName"
                                type="text"
                                value={descricao}
                                onChange={(e) => setDescricao(e.target.value)}
                            />
                        </FormGroup>
                        <Stack gap={2} direction="horizontal">
                            <FormGroup>
                                <Form.Label>Vencimento</Form.Label>
                                <Form.Control
                                    value={vencimento}
                                    size="sm"
                                    name="vencimento"
                                    type="date"
                                    onChange={(e) => setVencimento(e.target.value)}
                                />
                            </FormGroup>
                            <Button
                                variant="outline-primary"
                                size="sm"
                                className="ms-auto"
                                onClick={updateData}
                                // type='submit'
                            >
                                Ok
                            </Button>
                            <Button onClick={() => setEdit(false)} variant="outline-secondary" size="sm" type="submit">
                                Cancel
                            </Button>
                        </Stack>
                    </Form>
                </Row>
            </Container>
        </div>
    )
}
