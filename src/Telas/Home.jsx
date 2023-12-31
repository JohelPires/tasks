import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Task from '../Componentes/Task'
import AddTask from '../Componentes/AddTask'
// import '../App.css'

function Home({ token }) {
    const [tarefas, setTarefas] = useState([])
    const [reload, setReload] = useState(false)

    const requestOptions = {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
    }
    // console.log(requestOptions.headers)

    function fetchData(loginData) {
        fetch('http://localhost:5000/tarefa', requestOptions)
            .then((response) => response.json())
            .then((data) => {
                // console.log(data)
                setTarefas(data)
            })
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        fetchData()
    }, [reload])

    return (
        <section className="hero">
            <AddTask token={token} setReload={setReload} />
            <div className="hero-content">
                <h1>Tarefas</h1>

                {tarefas.map((tarefa) => {
                    return <Task tarefa={tarefa} token={token} setReload={setReload} />
                })}
            </div>
        </section>
    )
}

export default Home
