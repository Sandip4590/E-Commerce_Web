import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Add, Remove } from "../slice/CartReducer";
import toast from "react-hot-toast";

const Product = ({ items }) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const AddFn = (item) => {
    dispatch(Add(item));
    toast.success("Item Added");
  };

  const removefn = (item) => {
    dispatch(Remove(item));
    toast.error("item Removed");
  };
  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:grid-cols-4 mt-5 gap-5 min-h-[80vh] mb-5   ">
      {items.map((item) => (
        <div key={item.id} className=" flex flex-col   shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg justify-between hover:scale-105 transition duration-300 ease-in items-center p-4 gap-2.5 ml-5  ">
          <p className=" text-gray-700 text-lg font-semibold truncate w-40 mt-1 ">{item.title}</p>
          <p className="w-40 text-gray-400 text-[12px] font-normal h-10 overflow-hidden">{item.description.split(" ").slice(0,10).join(" ") + "..."}</p>
          <img src={item.image} className=" h-[180px]" />

          <div className=" flex gap-10 justify-between items-center w-full  mt-5 ">
          <p className=" text-green-600 font-bold  ">
            ${item.price}
          </p>
          <div>
              {cart.some((p) => p.id == item.id) ? (
              <button onClick={() => removefn(item)} className="text-gray-700 border-2 border-gray-700 rounded-full text-[9px] font-semibold p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in" >remove to cart</button>
            ) : (
              <button onClick={() => AddFn(item) } className="text-gray-700 border-2 border-gray-700 rounded-full text-[9px] font-semibold p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in">add to cart</button>
            )}
          </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
