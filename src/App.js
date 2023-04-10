import React from "react";

// components
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Cart from "./components/Cart/Cart";
import ProductDetail from "./components/productdetails/ProductDetail";
import DataProvider from "./context/DataProvider";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <DataProvider className=" app h-[2000px]">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </DataProvider>
  );
}

export default App;
