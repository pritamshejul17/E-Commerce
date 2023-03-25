import React from 'react'
import s2 from '../Assets/MEN/Shirts/s2.jpg'
import cross from '../Assets/cross.png'

function Cart(props) {

    const { cart } = props;
    console.log(cart);
  return (
    <>
        <div className = 'flex justify-center p-4 '>
            <div className = 'p-2 shadow-lg'><img className = 'h-40 w-30' src = { s2 }/></div>
            <div className = 'text-slate-600 w-1/4 p-3 shadow-lg ml-3'>
                <h1 className = 'w-3/4 inline p-y-1 font-medium'>PUMA OVERSIZED T-SHIRT</h1>
                <a href='#' className = 'ml-12'><img src= { cross} className = 'inline h-6 w-6' /></a>
                <h1 className = 'text-sm'>Sold By : Shopify Fashion</h1>
                <h1 className = 'text-sm font-medium mt-2'>Size : L</h1>
                <h1 className = 'text-sm font-medium'>Quantity : 1</h1>
                <h1 className = 'font-medium mt-1'>Rs 1999</h1>
                <button className = 'bg-slate-600 text-white text-sm p-2 px-3 rounded-md mt-2'>Buy Now</button>
                
            </div>
        </div>
    </>
  )
}

export default Cart