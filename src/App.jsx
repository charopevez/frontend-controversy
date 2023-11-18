import { createSignal } from 'solid-js'
import './App.css'
import Room from './components/Room'

function App() {
  const [count, setCount] = createSignal(0)

  return (
    <div>
      <Room />
    </div>
  )
}

export default App
