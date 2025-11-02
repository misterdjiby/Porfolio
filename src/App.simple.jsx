import React from 'react'
import './App.css'

function App() {
  return (
    <div className="App" style={{ padding: '40px', background: '#0f172a', minHeight: '100vh', color: '#f1f5f9' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>Portfolio - Test</h1>
      <p style={{ fontSize: '1.2rem' }}>Si vous voyez ce message, React fonctionne!</p>
      <p style={{ marginTop: '20px', color: '#cbd5e1' }}>
        Si cette page s'affiche, nous pouvons maintenant charger les composants un par un.
      </p>
    </div>
  )
}

export default App

