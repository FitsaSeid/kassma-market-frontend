import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import TopHeader from './components/TopHeader'
import Header from './components/Header'
import Banner from './components/banner'
import Filters from './components/Filters'
import Products from './pages/Products'
import Footer from './components/Footer'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import SingleProduct from './pages/SingleProduct'
import Cart from './pages/Cart'
import Login from './pages/Login'
import RequireAuthentication from './features/RequireAuthentication'

function App() {
  return (
    <>
      <TopHeader />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route element={<RequireAuthentication />}>
          <Route path='/products' element={<Products />} />
        </Route>
        <Route path='/product/:id' Component={SingleProduct} />
        <Route path='/cart' Component={Cart} />
        <Route path='/login' Component={Login} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
