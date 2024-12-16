import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login } from './Pages/login'
import { Home } from './Pages/home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
     <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<Home/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
