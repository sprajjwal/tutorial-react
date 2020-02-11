import React from 'react';
import Project from './Project';
import './PageContent.css';
import logo  from './logo.svg'

function PageContent() {
    return (
        <div className="PageContent">
            <Project image={logo} title="Cute Kitty" link="https://github.com/sprajjwal/tutorial-react" />
            <Project image={logo} title="Cute Kitty" link="https://github.com/sprajjwal/tutorial-react" />
            <Project image={logo} title="Cute Kitty" link="https://github.com/sprajjwal/tutorial-react" />
            <Project image={logo} title="Cute Kitty" link="https://github.com/sprajjwal/tutorial-react" />
            <Project image={logo} title="Cute Kitty" link="https://github.com/sprajjwal/tutorial-react" />
            <Project image={logo} title="Cute Kitty" link="https://github.com/sprajjwal/tutorial-react" />
        </div>
    )
}

export default PageContent;