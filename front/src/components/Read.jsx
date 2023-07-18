import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container, Spinner, Stack } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Update from './Update'
import Item from './Item'

function Read({ isAuth }) {
    const [dados, setDados] = useState([])
    const [reload, setReload] = useState(false)
    const [loading, setLoading] = useState(true)

    function getData() {
        axios
            .get('http://localhost:5000/tarefa/', {
                headers: { Authorization: `Bearer ${isAuth.accessToken}` },
            })
            .then((data) => {
                console.log(data.data)
                setDados(data.data)
                setLoading(false)
            })
            .catch((err) => console.log(err))
        //     fetch('https://64b03fbdc60b8f941af5776c.mockapi.io/fakeData')
        //         .then((response) => response.json())
        //         .then((data) => {
        //             setDados(data)
        //             setLoading(false)
        //         })
        //         .catch((err) => console.log(err))
    }

    useEffect(() => {
        getData()
    }, [reload])

    return (
        <div className='col-md col-8 mx-auto mt-5'>
            {loading ? (
                <Spinner animation='border' variant='primary' />
            ) : (
                <Container>
                    <Stack gap={3}>
                        {dados.map((item) => {
                            return <Item key={item.id} item={item} setReload={setReload} />
                        })}
                    </Stack>
                </Container>
            )}
        </div>
    )
}

export default Read
