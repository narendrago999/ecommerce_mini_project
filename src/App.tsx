import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home/Home'
import SignIn from './components/SignIn/SignIn';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/signin' element={<Home />}/>
    <Route path='/signup' element={<Home />}/>
    <Route path='/cart' element={<Home />}/>
    <Route path='/order-place' element={<Home />}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
