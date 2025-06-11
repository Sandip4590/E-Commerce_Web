import React from "react";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";


const NavBar = () => {

  const cart = useSelector((state) => state.cart)
  return (
    <nav className="  flex p-5 sm:max-w-xl md:max-w-3xl lg:max-w-6xl h-20 items-center justify-between mx-auto text-white">
    <img src="/logo.png" className="h-14 object-cover " />
      <div className=" flex font-medium items-center gap-2">
        <NavLink to={"/"}>
          <p>Home</p>
        </NavLink>
        <NavLink to={"/cart"}>
          <div className=" relative">

            <FaShoppingCart className="text-2xl" />
            {
            
              cart.length > 0 &&  <span className="absolute -top-1 -right-1 flex justify-center items-center text-[9px] w-4 h-4 bg-green-600 rounded-full animate-bounce "> {cart.length} </span>
             
             }
           
          </div>
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
