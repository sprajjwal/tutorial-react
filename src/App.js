import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import PageHeader from './PageHeader'
import PageContent from './PageContent'
import Footer from './Footer'
import SelectedProject from './SelectedProject'

function App() {
  return (
    <Router>
      <div className="App">

        <PageHeader />
        {/* <PageContent /> */}
        <Route exact path='/' component={PageContent} />
        <Route path='/:index' component={SelectedProject} />
        <Footer />
      </div>
    </Router>
    
  )
}

export default App;
