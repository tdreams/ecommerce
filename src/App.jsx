import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Shoes from "./pages/Shoes";
import Cart from "./pages/Cart";
import SingleShoes from "./pages/SingleShoes";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shoes" element={<Shoes />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shoes/:id" element={<SingleShoes />} />
      </Routes>
    </>
  );
}

export default App;
