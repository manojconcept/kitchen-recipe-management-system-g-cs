import React, { lazy, Suspense } from 'react';
import { Routes, Route } from "react-router-dom"
import Loader from './components/LoaderY/Loader';

const Main = lazy(() => import('./pages/Main'));
const Signin = lazy(() => import('./pages/Log/Signin'));
const Signup = lazy(() => import('./pages/Log/Signup'));
const Navbar = lazy(() => import('./components/Navbar'));
const Footer = lazy(() => import('./components/Footer'));
const Test = lazy(() => import('./components/LoaderY/Loader'));
const DataVisu = lazy(() => import('./pages/Inventory/DataVisu'));
const Inventory = lazy(() => import("./pages/Inventory/Inventory"));
const ThirdBar = lazy(() => import("./components/Navbar/ThirdBar"));

const App = () => {
  return (
    <>
      <Suspense fallback={<Loader/>}>
        {
          sessionStorage.getItem('jwtToken')? <Navbar />   : <ThirdBar/>
        }
        <Routes>
          <Route path='/' element={sessionStorage.getItem('jwtToken')?<Main />:<Signin Footer={<Footer />} />} />
          <Route path='/signup' element={sessionStorage.getItem('jwtToken')?<Main />:<Signup Footer={<Footer />} />} />
          <Route path="/datavisualization" element={sessionStorage.getItem('jwtToken') ? <DataVisu Footer={<Footer />} /> : <Signin Footer={<Footer />} />} />
          <Route path="/inventory" element={sessionStorage.getItem('jwtToken') ? <Inventory Footer={<Footer />} /> : <Signin Footer={<Footer />} />} />
          <Route path='/test' element={sessionStorage.getItem('jwtToken') ? <Test />: ""} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </Suspense> 
    </>
  )
}

export default App;