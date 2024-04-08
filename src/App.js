import React from 'react';
import { Routes, Route } from "react-router-dom"

import Main from './pages/Main';
import Signup from './pages/Log/Signin';
import Signin from './pages/Log/Signup';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
      <Footer/>
    </>

  )
}

export default App;