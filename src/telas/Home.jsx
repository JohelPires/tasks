import React from 'react'
import { Link } from 'react-router-dom'
// import '../App.css'

function Home() {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1>Johel Pires</h1>
                <p>Full Stack Developer</p>
                <p>Passionate about creating innovative web solutions.</p>
                <br />
                <br />
                <Link className="button" to="sobre">
                    Sobre
                </Link>
            </div>
        </section>
    )
}

export default Home
