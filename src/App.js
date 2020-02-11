import React from 'react';
import logo from './logo.svg';
import './App.css';
import Heading from './Heading'

function App() {
  return (
    <div className="App">
      <Heading title="Hello, World!" subtitle="Foo bar" />
      <Heading title="Bye, World!" subtitle="barfoo" />
    </div>
  )
}

export default App;
