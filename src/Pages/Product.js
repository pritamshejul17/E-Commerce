import React from 'react'
import { useParams } from 'react-router-dom'
const Product = (props) => {
    const { myArray } = props;
    const { id } = useParams();
    const index = parseInt(id);
  return (
    <>
        <div className = 'flex justify-center h-screen '>
            <div className = ' mr-10 bg-stone-100 p-4 mt-5 rounded-md '>
                <img className  = 'h-3/4 w-120 mt-10' src = {require(`../Assets/MEN/Shirts/${myArray[index - 1].name}`)}/>
            </div>
            <div className = ' w-1/3 text-center text-stone-600 shadow-md mt-4'>
                <h1 className = 'text-xl font-medium text-slate-600 mt-8 p-4 border-b-2 border-blacks mx-4'>{`${myArray[index - 1].info}`}</h1>
                <h1 className = 'text-slate-600 text-xl font-normal text-start  ml-7 mt-3'>Men Shirts</h1>
                <h1 className = 'p-3 text-xl  font-normal text-slate-600 text-start ml-4 '>Rs 1000 (exclusive 30% off)</h1>
                <h1 className = 'text-md ml-7 font-normal pt-4 text-start'>Select Size</h1>
                <div className ='p-6 flex justify-center border-y-2 border-blacks mt-1 mx-4'>
                    <button type='button' className = 'border-2 w-12 h-12 border-stone-600 p-3 rounded-md'>XS</button>
                    <button type='button' className = 'border-2 w-12 h-12 ml-8 border-stone-600 p-3 rounded-md'>S</button>
                    <button type='button' className = 'border-2 w-12 h-12 ml-8 border-stone-600 p-3 rounded-md'>M</button>
                    <button type='button' className = 'border-2 w-12 h-12 ml-8 border-stone-600 p-3 rounded-md'>L</button>
                </div>
                <div className = 'flex justify-center p-4 mt-4'>
                    <button  className = 'text-white hover:bg-stone-700 bg-slate-800 p-3 px-5 font-normal rounded-md mr-4'>ADD TO CART</button>
                    <button className = 'text-white hover:bg-stone-700 bg-slate-800 p-3 px-5 font-normal rounded-md ml-4'>BUY NOW</button>
                </div>
                <h1 className = 'text-slate-600 text-lg font-medium p-6'>Thank you for shopping from our store!</h1>
            </div>
        </div>
    </>
  )
}

export default Product