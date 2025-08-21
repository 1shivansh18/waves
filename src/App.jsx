import { useState } from 'react'
import './App.css'
import WavesModule from './components/WavesModule'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <WavesModule/>
    </>
  )
}

export default App
