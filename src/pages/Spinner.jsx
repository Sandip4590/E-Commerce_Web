import React from 'react'
import "./Spinner.css"

const Spinner = () => {
  return (
    <div className='flex flex-col h-screen my-auto items-center content-center justify-center gap-4'>
      <div className='spinner'>
   

      </div>
      <p className=' text-green-900 font-bold text-xl gap-4'>Loading...</p>
    </div>
  )
}

export default Spinner