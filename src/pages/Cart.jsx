import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CartItem from "../components/CartItem"

const Cart = () => {

    const {cart} = useSelector((state) => state) 
    const [totalAmount,setTotalAmount] = useState(0);
    useEffect ( () => {
        setTotalAmount( cart.reduce((acc , curr) => acc + curr.price, 0));
    } , [cart])
  return (
    <div>
    {
        cart.length > 0 ? 
        (<div className=' flex justify-center gap-10  '>
            <div>
                {
                    cart.map ( ( item ,index ) => {
                    return <CartItem key={item.id} item={item} itemIndex={index} />
                })
                }
            </div>
            <div className= "flex flex-col relative h-[550px]  mt-5 space-y-10 ">
                <div className="">
                    <div className=' text-green-900 text-lg font-bold uppercase'>
                        Your Cart
                    </div>
                    <div  className=' text-green-900 text-4xl font-bold uppercase'>
                        Summary
                    </div>
                    <p>
                        <span className=' text-green-900 text-lg font-semibold '>
                            Total Items: {cart.length}
                        </span>
                    </p>
                </div>
                <div className=' space-y-2'>
                    <p className=" text-green-900 font-semibold text-lg">
                        Total Amount : <span className="font-bold text-black">${totalAmount}</span>
                    </p>
                    <button className=" text-white bg-green-900 px-40 md:px-20 sm:px-8   rounded-md py-3 font-bold hover:text-green-900 hover:outline
                     hover:bg-white ">
                        Checkout Now
                    </button>
                </div>
            </div>
        </div>) : 
        (<div className='flex flex-col h-screen my-auto items-center content-center justify-center gap-2'>
        <h1  className=" text-green-900 font-semibold text-lg">
            Cart Empty
        </h1>
            <Link to ={ "/"}>
            <button className=" text-white bg-green-900 px-40 md:px-20 sm:px-8   rounded-md py-3 font-bold hover:text-green-900 hover:outline
                     hover:bg-white ">
            Shop Now 
        </button>
            </Link>

        </div>)
    }



    </div>
  )
}

export default Cart