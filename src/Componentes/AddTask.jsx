import React from 'react'
import './AddTask.css'
import { useForm } from 'react-hook-form'

function AddTask({ token, setReload }) {
    const { register, handleSubmit } = useForm()
    function onSubmit(data) {
        console.log(data)
        fetchData(data)
    }

    function fetchData(postData) {
        const requestOptions = {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        }
        fetch('http://localhost:5000/tarefa', requestOptions)
            .then((response) => response.json())
            .then((data) => {
                if (data.erro) {
                    alert(data.erro)
                } else {
                    console.log(data)
                    setReload((prev) => !prev)
                }
            })
            .catch((err) => console.log(err))
    }

    return (
        <>
            <h1>Adicionar Tarefa</h1>

            <form className="add-task-container" onSubmit={handleSubmit(onSubmit)}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <input type="text" placeholder="Título da tarefa" {...register('titulo')}></input>
                    <input className="date-input" type="date" {...register('vencimento')}></input>
                </div>
                <input type="text" placeholder="Descrição da tarefa" {...register('descricao')}></input>
                <input type="submit" />
            </form>

            {/* <div className="add-task-container">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <input type="text" placeholder="Título da tarefa"></input>
                    <input className="date-input" type="date"></input>
                </div>
                <input type="text" placeholder="Descrição da tarefa"></input>
                <button>Adicionar</button>
            </div> */}
        </>
    )
}

export default AddTask
