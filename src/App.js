import React from 'react';
import {Routes,Route} from "react-router-dom"

import Admin from './pages/Admin';
import Main from './pages/Main';


const App = () =>{
  return(
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path="/admin" element={<Admin/>}/>
    </Routes>
  )
}

export default App;