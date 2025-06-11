import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../Components/CartItem";
import { NavLink } from "react-router-dom";
import toast from "react-hot-toast";
import { InitCart } from "../slice/CartReducer";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch()

  const [totalvalue, SetTotalvalue] = useState(0);

  useEffect(() => {
    SetTotalvalue(cart.reduce((a, c) => a + c.price, 0));
  }, [cart]);
  console.log("Printing Cart Value", cart);
  const handlefn = () => {
    toast.success("Order Place Success Fully")
    dispatch(InitCart())
    // cart = [];
  }

  return (
    <div className=" flex justify-center items-center lg:h-screen ">
      {cart.length > 0 ? (
        <div className=" flex lg:flex-row md:flex-row  flex-col">
          
          <CartItem cart={cart} totalvalue={totalvalue} />
          <div className=" p-2 lg:mt-15 mt-5 lg:pl-15 md:pl-5 flex flex-col gap-5 ">
            <div className=" flex flex-col  lg:h-[70vh] ">
              <p className=" uppercase text-green-800 text-sm font-bold ">your Cart</p>
              <h1 className=" uppercase text-green-800 text-4xl font-bold">summary</h1>
              <p className=" text-gray-700 text-lg font-semibold mt-2"> Total items: {cart.length}</p>
            </div>
            <div className="text-gray-700 text-lg font-semibold "><p>
              Total Amount :&nbsp;<span className=" text-gray-900 font-bold">
                ${totalvalue}
              </span>
            </p>
           <NavLink to={"/"}>
             <button onClick={handlefn} className=" w-[300px] lg:w-[400px] bg-green-800 hover:border-2 text-white p-2.5 px-7 font-semibold hover:border-green-700 rounded-lg hover:text-green-700  hover:bg-white">
             check Now
            </button>
           </NavLink>

            </div>
          </div>
        </div>
      ) : (
        <div className=" flex flex-col items-center gap-2">
          <p className=" text-gray-700 font-semibold text-lg">
            Your Cart is Empty&nbsp;!
          </p>
          <NavLink to={"/"}>
            <button className=" bg-green-700 hover:border-2 text-white p-2.5 px-7 font-semibold hover:border-green-700 rounded-lg hover:text-green-700  hover:bg-white">
              Shop Now
            </button>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Cart;
