import { useState } from 'react'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Main />
    </>
  )
}

export default App
