import React, { useState } from 'react'
import { Button, ButtonGroup, Stack } from 'react-bootstrap'
import { useFormState } from 'react-hook-form'
import Update from './Update'
import axios from 'axios'

function Item({ item, setReload }) {
    const [edit, setEdit] = useState(false)
    function handleDelete() {
        if (window.confirm('Tem certeza que quer deletar esse item?')) {
            axios
                .delete(`https://64b03fbdc60b8f941af5776c.mockapi.io/fakeData/${item.id}`)
                .then((data) => setReload((prev) => !prev))
        }
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
                        <Button size="sm" variant="outline-secondary" onClick={() => setEdit((prev) => !prev)}>
                            done
                        </Button>
                        <Button size="sm" variant="outline-secondary" onClick={() => setEdit((prev) => !prev)}>
                            Editar
                        </Button>
                        <Button size="sm" variant="outline-danger" onClick={handleDelete}>
                            Deletar
                        </Button>
                    </ButtonGroup>
                </>
            )}
            {edit && <Update item={item} setEdit={setEdit} setReload={setReload} />}
        </div>
    )
}

export default Item
