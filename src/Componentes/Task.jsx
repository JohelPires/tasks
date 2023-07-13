import React, { useState } from 'react'
import './task.css'
import { useForm } from 'react-hook-form'

function Task({ tarefa, token, setReload }) {
    const [show, setShow] = useState(false)
    const [edit, setEdit] = useState(false)
    const { register, handleSubmit } = useForm()

    function onSubmit(data, id) {
        let atualiza = { vencimento: data.vencimento }
        if (data.titulo) {
            atualiza = { ...atualiza, titulo: data.titulo }
        }
        if (data.descricao) {
            atualiza = { ...atualiza, descricao: data.descricao }
        }

        console.log(atualiza, tarefa.id)
        fetchPut(atualiza, tarefa.id, tarefa)
        setEdit(false)
    }

    function fetchPut(putData, id) {
        const requestOptions = {
            method: 'PUT',
            body: JSON.stringify(putData),
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        }
        fetch(`http://localhost:5000/tarefa/${id}`, requestOptions)
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
            })
            .catch((err) => console.log(err))
    }

    function fetchDel(id) {
        if (window.confirm('Tem certeza?') === false) {
            console.log('cancelado')
            return
        }

        const requestOptions = {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        }
        fetch(`http://localhost:5000/tarefa/${id}`, requestOptions)
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                setReload((prev) => !prev)
            })
            .catch((err) => console.log(err))
    }

    return (
        <div key={tarefa.id} className="task-container">
            {edit ? (
                <form className="add-task-container" onSubmit={handleSubmit(onSubmit)}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <input type="text" placeholder={tarefa.titulo} {...register('titulo')}></input>
                        <input
                            className="date-input"
                            type="date"
                            value={tarefa.vencimento}
                            {...register('vencimento')}
                        ></input>
                    </div>
                    <input type="text" placeholder={tarefa.descricao} {...register('descricao')}></input>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'right', gap: '10px' }}>
                        <button onClick={() => setEdit((prev) => !prev)}>Cancelar</button>
                        <button type="submit">Atualizar</button>
                    </div>
                </form>
            ) : (
                <div className="task-main">
                    <button onClick={() => !tarefa.status}>{tarefa.status ? 'x' : '-'}</button>

                    <h3 style={{ cursor: 'pointer' }} onClick={() => setShow((prev) => !prev)}>
                        {tarefa.titulo.length > 40 ? tarefa.titulo.slice(0, 40) + '...' : tarefa.titulo}
                    </h3>

                    <p>{tarefa.vencimento}</p>
                    <div className="controls">
                        <button onClick={() => setEdit((prev) => !prev)}>edit</button>
                        <button onClick={() => fetchDel(tarefa.id)}>del</button>
                        <p>priority</p>
                    </div>
                </div>
            )}
            <div style={{ display: show ? 'block' : 'none' }}>
                {/* <div style={{ height: show ? '200px' : '100px' }}> */}
                <p>{tarefa.descricao}</p>
            </div>
        </div>
    )
}

export default Task
