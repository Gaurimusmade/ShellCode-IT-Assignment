import React, { useState } from 'react'
import Cart from './cart'
import './App.css'
import Product from './product'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Product />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>

    </BrowserRouter>
  )
}

export default App