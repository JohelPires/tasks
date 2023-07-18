import React from 'react'
import { Container } from 'react-bootstrap'

function Profile({ isAuth }) {
    console.log(isAuth)
    return (
        <div className="col-md col-6 mx-auto mt-5">
            <Container>
                <h5>Nome: {isAuth.nome} </h5>
                <h5>Nome de login: {isAuth.user} </h5>
                <h5>Email: {isAuth.email} </h5>
            </Container>
        </div>
    )
}

export default Profile
