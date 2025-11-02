import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import WorkProcess from './components/WorkProcess'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Contact from './components/Contact'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      <WorkProcess />
      <Skills />
      <Experience />
      <Contact />
    </div>
  )
}

export default App

