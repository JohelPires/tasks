import React, { useState } from 'react'
import { Button, ButtonGroup, Stack } from 'react-bootstrap'
import { useFormState } from 'react-hook-form'
import Update from './Update'
import axios from 'axios'
import { ImBin, ImCheckboxChecked, ImCheckboxUnchecked, ImPencil } from 'react-icons/im'

function Item({ item, setReload, isAuth }) {
    const [edit, setEdit] = useState(false)
    function handleDelete() {
        if (window.confirm('Tem certeza que quer deletar esse item?')) {
            axios
                .delete(`http://localhost:5000/tarefa/${item.id}`, {
                    headers: { Authorization: `Bearer ${isAuth.accessToken}` },
                })
                .then((data) => setReload((prev) => !prev))
                .catch((err) => console.log(err))
        }
    }

    function handleDone() {
        const newStatus = !item.status
        axios
            .put(
                `http://localhost:5000/tarefa/${item.id}`,
                {
                    status: newStatus,
                },
                {
                    headers: { Authorization: `Bearer ${isAuth.accessToken}` },
                }
            )
            .then((data) => setReload((prev) => !prev))
            .catch((err) => console.log(err))
    }

    return (
        <div key={item.id} className="item shadow">
            {!edit && (
                <>
                    <div>
                        <h6>{item.titulo}</h6>
                        <p style={{ fontSize: '0.8rem' }}>vencimento: {item.vencimento}</p>
                        {item.descricao && <p style={{ fontSize: '0.9rem' }}>{item.descricao}</p>}
                    </div>

                    <ButtonGroup>
                        <Button size="sm" variant={item.status ? 'success' : 'outline-secondary'} onClick={handleDone}>
                            {item.status ? <ImCheckboxChecked /> : <ImCheckboxUnchecked />}
                        </Button>
                        <Button size="sm" variant="outline-secondary" onClick={() => setEdit((prev) => !prev)}>
                            <ImPencil />
                        </Button>
                        <Button size="sm" variant="outline-danger" onClick={handleDelete}>
                            <ImBin />
                        </Button>
                    </ButtonGroup>
                </>
            )}
            {edit && <Update isAuth={isAuth} item={item} setEdit={setEdit} setReload={setReload} />}
        </div>
    )
}

export default Item
