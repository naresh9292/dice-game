
import './App.css'
import Home from './Home'
import HowToPlay from './HowToPlay'
import PlayGame from './PlayGame'
import {  Route, Routes } from 'react-router-dom'

function App() {
  

  return (
    <div>
      
     
      
       <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/play' element={<PlayGame />} />
        <Route path='/rule' element={<HowToPlay />} />
       </Routes>
      
      
    
    </div>
  )
}

export default App
