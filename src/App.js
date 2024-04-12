import React, { lazy, Suspense } from 'react';
import { Routes, Route } from "react-router-dom"

const Main = lazy(() => import('./pages/Main'));
const Signin = lazy(() => import('./pages/Log/Signin'));
const Signup = lazy(() => import('./pages/Log/Signup'));
const Navbar = lazy(() => import('./components/Navbar'));
const Footer = lazy(() => import('./components/Footer'));
const Test = lazy(() => import('./components/test/Test'));
const DataVisu = lazy(() => import('./pages/Inventory/DataVisu'));
const Inventory = lazy(() => import("./pages/Inventory/Inventory"));

const App = () => {
  return (
    <>
    <Suspense fallback={<div>Loading...</div>}>
      <Navbar />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/signin' element={<Signin Footer={<Footer />} />} />
        <Route path='/signup' element={<Signup Footer={<Footer />} />} />
        <Route path='/test' element={<Test />} />
        <Route path="/datavisualization" element={<DataVisu Footer={<Footer />} />} />
        <Route path="/inventory" element={<Inventory Footer={<Footer />} />} />
      </Routes>
      </Suspense>
    </>

  )
}

export default App;