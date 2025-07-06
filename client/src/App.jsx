import { useState } from 'react'
 
import Navbar from './components/navbar'
import Hero from './pages/hero.jsx'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import WeddingLogin from './pages/Login.jsx'
import UserDasboard from './pages/UserDasboard.jsx'
import WeddingRegister from './pages/Regestration.jsx'


 import {Toaster} from "react-hot-toast"

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Toaster />
    <Navbar/>

    
    <Routes>
      
      <Route  path='/login' element={<WeddingLogin />}/>
      <Route  path='/' element={<Hero />}/>
      <Route  path='/registeration' element={<WeddingRegister/>}/>
      <Route  path='/userdasboard' element={<UserDasboard/>}/>

    </Routes>
    </BrowserRouter>
  )
}

export default App
