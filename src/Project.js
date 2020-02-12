import React from 'react'
import './Project.css'

function Project(props) {
    return (
        <div className="Project">
            <div className="imageHolder">
            <img className="App-logo" src={props.image} width="300" height="200" alt="logo" />
            </div>
            <div className="content">
                <h3>{props.title}</h3>
                <a href="{props.link}">Link to project</a>
            </div>
        </div>
    )
}

export default Project;