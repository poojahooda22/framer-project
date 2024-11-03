import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import AnimatedRoute from './AnimatedRoute'

function App() {
  
  return (
    <div className='w-[100vw] h-[100vh]'>
      <Router>
        <AnimatedRoute />
      </Router>
    </div>

  )
}

export default App
