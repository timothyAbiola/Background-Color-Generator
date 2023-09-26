import { useState } from 'react'
import './App.css'
import EsignatureApp from '../components/EsignatureApp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <EsignatureApp></EsignatureApp>
    </>
  )
}

export default App
