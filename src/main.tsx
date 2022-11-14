import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App/App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <header>
      <h1>都道府県別人口推移</h1>
    </header>
    <App />
  </React.StrictMode>,
)
