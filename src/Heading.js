import React from 'react';

function Heading(props) {
    return (
        <header className="App-header">
        <h1>{props.title}</h1>
        <p>{props.subtitle}</p>
        </header>
    );
}

export default Heading;  