import { useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NavBar from "./Components/NavBar.jsx";

function App() {
  return (
    <div className=" flex flex-col justify-center items-center lg:w-full md:w-full sm:w-full ">
      <div className=" bg-slate-900 w-full ">
        <NavBar />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
