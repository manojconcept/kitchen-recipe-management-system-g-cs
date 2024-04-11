import React from 'react';
import { Routes, Route } from "react-router-dom"

import Main from './pages/Main';
import Signin from './pages/Log/Signin';
import Signup from './pages/Log/Signup';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Test from './components/test/Test';
import DataVisu from './pages/Inventory/DataVisu';
import Inventory from './pages/Inventory/Inventory';
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/signin' element={<Signin Footer={<Footer/>}/>} />
        <Route path='/signup' element={<Signup Footer={<Footer/>} />} />
        <Route path='/test' element={<Test/>} />
        <Route path="/datavisualization" element={<DataVisu Footer={<Footer/>}/>}/>
        <Route path="/inventory" element={<Inventory Footer={<Footer/>}/>}/>
      </Routes>
    </>

  )
}

export default App;