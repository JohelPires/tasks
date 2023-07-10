import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Projetos() {
    const [gitproj, setGitproj] = useState([])

    function fetchData() {
        fetch('https://api.github.com/users/JohelPires/repos')
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                setGitproj(data)
            })
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            <h2>Projetos no GitHub:</h2>
            {gitproj.map((item) => {
                return (
                    <div key={item.id} className="item login-container">
                        <Link to={item.html_url}>
                            <h3>{item.name}</h3>
                        </Link>
                        <p>criado em: {item.created_at.slice(0, 10)}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Projetos
