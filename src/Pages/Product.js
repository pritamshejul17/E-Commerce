import React from 'react'
import s7 from '../Assets/MEN/Shirts/s7.jpg'

const Product = () => {
  return (
    <>
        <div className = 'flex justify-center h-screen '>
            <div className = ' mr-10 bg-stone-200 p-4 mt-5 rounded-md '>
                <img className  = 'h-3/4 w-120 mt-10' src = {s7}/>
            </div>
            <div className = ' w-1/3 text-center text-stone-600 shadow-md mt-5'>
                <h1 className = 'text-2xl font-medium text-stone-600 mt-10 p-4 border-b-2 border-blacks mx-4'>Puma T Shirt : Oversized</h1>
                <h1 className = 'text-slate-600 text-lg text-start  ml-7 mt-3'>Men Shirts</h1>
                <h1 className = 'p-3 text-2xl  font-medium text-slate-600 text-start ml-4 '>Rs 1000</h1>
                <h1 className = 'text-md ml-7 font-medium pt-4 text-start'>Select Size</h1>
                <div className ='p-6 flex justify-around'>
                    <button type='button' className = 'border-2 border-stone-600 p-3 rounded-md'>XS</button>
                    <button type='button' className = 'border-2 border-stone-600 p-3 rounded-md'>S</button>
                    <button type='button' className = 'border-2 border-stone-600 p-3 rounded-md'>M</button>
                    <button type='button' className = 'border-2 border-stone-600 p-3 rounded-md'>L</button>
                </div>
                <div className = 'flex justify-center p-4'>
                    <button className = 'text-white bg-slate-600 p-4 font-medium rounded-md mr-4'>ADD TO CART</button>
                    <button className = 'text-white bg-slate-600 p-4 font-medium rounded-md ml-4'>ADD TO WISHLIST</button>
                </div>
                <h1 className = 'text-slate-600 text-lg font-medium p-6'>Thank you for shopping from our store!</h1>
            </div>
        </div>
    </>
  )
}

export default Product