import { useState } from 'react'
 
import Navbar from './components/navbar'
import Hero from './pages/hero.jsx'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import WeddingLogin from './pages/Login.jsx'

import WeddingRegister from './pages/regestration.jsx'
 

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      
    <Navbar/>

    
    <Routes>
      
      <Route  path='/login' element={<WeddingLogin />}/>
      <Route  path='/' element={<Hero />}/>
      <Route  path='/registeration' element={<WeddingRegister/>}/>

    </Routes>
    </BrowserRouter>
  )
}

export default App
