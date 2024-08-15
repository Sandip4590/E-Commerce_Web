import React from 'react'
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { remove } from '../redux/slices/CartSlice';
import toast from "react-hot-toast";


const CartItem = ({item , itemIndex}) => {
    const dispatch = useDispatch();
    const removeFromCart = ()=> {
        dispatch(remove(item.id));
        toast.error("Item Removed")
        
    }
  return (
    <div className=' flex border-b-2 py-2
     max-h-3xl max-w-xl mt-8 '>
    <div  className="flex flex-row p-3 gap-5 items-center">

            <div className="w-[180px]">
                <img src={item.image} alt='' className=" object-cover"  />
            </div>
            <div className=' flex flex-col  justify-evenly ml-2  '>
               <div>
               <h1 className=' text-xl text-slate-700 font-semibold mt-1'>
               {item.title}
               </h1>
               </div>
                   <div>
                   <h1 className='text-base text-slate-700 font-medium'>
                        {item.description.split(" ").slice(0,10).join(" ") + "..."}
                    </h1>
                   </div>
               
                <div className=' flex justify-between items-center'>
                    <p className="text-green-600 font-bold text-lg">
                        ${item.price}
                    </p>
                    <div onClick={removeFromCart} className="text-red-800  bg-red-200 group hover:bg-red-400 transition-transform duration-300 cursor-pointer rounded-full p-3 mr-3">
                    <MdDelete />
                    </div>
                </div>

            </div>

            </div>
    </div>
  )
}

export default CartItem