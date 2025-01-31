import React, { lazy, Suspense } from 'react';
import { Routes, Route } from "react-router-dom"
import Loader from './components/LoaderY/Loader';
import MainLayout from './layout/MainLayout';

const Main = lazy(() => import('./pages/Main'));
const Signin = lazy(() => import('./pages/Log/Signin'));
const Signup = lazy(() => import('./pages/Log/Signup'));
const Footer = lazy(() => import('./components/Footer'));
const Test = lazy(() => import('./components/LoaderY/Loader'));
const DataVisu = lazy(() => import('./pages/Inventory/DataVisu'));
const Inventory = lazy(() => import("./pages/Inventory/Inventory"));

const App = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route element={<MainLayout />}>
            <Route index element={ <Main />} />
            <Route path='/signin' element={<Signin Footer={<Footer />}/>} />
            <Route path='/signup' element={sessionStorage.getItem('jwtToken') ? <Main /> : <Signup Footer={<Footer />} />} />
            <Route path="/datavisualization" element={<DataVisu Footer={<Footer />} />} />
            <Route path="/inventory" element={<Inventory Footer={<Footer />} />}  />
            <Route path='/test' element={sessionStorage.getItem('jwtToken') ? <Test /> : ""} />
          </Route>
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App;