import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import SignIn from './components/SignIn/SignIn'
const App:React.FC = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/signin' element={<SignIn />}/>
    <Route path='/signup' element={<SignIn />}/>

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App