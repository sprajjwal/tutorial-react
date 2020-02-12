import React from 'react';
import './App.css';
import PageHeader from './PageHeader'
import PageContent from './PageContent'
import Footer from './Footer'


function App() {
  return (
    <div className="App">
      <PageHeader />
      <PageContent />
      <PageContent />
      <Footer />
    </div>
  )
}

export default App;
