import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login  from './Pages/login'
import { Home } from './Pages/home'
import  Signup  from './Pages/signup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
     <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<Signup/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
