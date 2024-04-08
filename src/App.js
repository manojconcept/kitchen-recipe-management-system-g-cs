import React from 'react';
import { Routes, Route } from "react-router-dom"

import Main from './pages/Main';
import Signin from './pages/Log/Signin';
import Signup from './pages/Log/Signup';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Test from './components/test/Test';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/test' element={<Test/>} />

      </Routes>
      <Footer/>
    </>

  )
}

export default App;