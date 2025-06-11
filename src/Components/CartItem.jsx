import React from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Remove } from "../slice/CartReducer";
import toast from "react-hot-toast";

const CartItem = ({ cart, totalvalue }) => {
  // const cart = useSelector((state) => state.cart)

  const dispatch = useDispatch();
  const removefn = (item) => {
    dispatch(Remove(item));
    toast.error("item Removed");
  };

  return (
    <div className=" flex flex-col gap-2 h-screen overflow-scroll mt-5 p-5  items-center  ">
      {cart.map((i, index) => (
        <div
          key={index}
          className=" flex max-w-[320px] sm:max-w-xl md:max-w-xl lg:max-w-xl border-b-2 pb-5 gap-13   "
        >
          <div className="  flex justify-center items-center ">
            <img src={i.image} className=" max-w-25  h-40" />
          </div>
          <div className=" flex flex-col justify-center   gap-3">
            <p className=" text-gray-800 text-lg font-semibold line-clamp-2  mt-1">
              {i.title}
            </p>
            <p className=" line-clamp-3 text-sm text-gray-700 font-semibold">
              {i.description.split(" ").slice(0, 15).join(" ") + "..."}
            </p>
            <div className=" flex justify-between">
              <p className="text-green-700 font-bold ">${i.price}</p>
              <div className=" w-7 rounded-full justify-center items-center flex h-7 bg-red-500/35">
                <MdDelete
                  onClick={() => removefn(i)}
                  className=" text-red-900"
                />
              </div>
            </div>
          </div>
        </div>
      ))}
      {/* <p>Total:{totalvalue}</p> */}
    </div>
  );
};

export default CartItem;
