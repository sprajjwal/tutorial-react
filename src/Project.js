import React from 'react'
import { Link } from 'react-router-dom'
import './Project.css'

function Project(props) {
    return (
        <div className="Project">
            <div className="imageHolder">
            <img src={props.image} width="300" height="200" alt="logo" />
            </div>
            <div className="content">
                <h3>{props.title}</h3>
                <Link to={props.link}>Link to project</Link>
            </div>
        </div>
    )
}

export default Project;