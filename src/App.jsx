import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";

function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<ProductList/>} />
          <Route path="/product/:productId" element={<ProductDetail/>} />
          <Route>404 Not Found!</Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
