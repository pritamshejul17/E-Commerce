import React from 'react'
import { useState } from 'react';

function Shirts() {
    const sAll = ["s1.jpg", "s2.jpg", "s3.jpg", "s4.jpg", "s5.jpg", "s6.jpg", "s7.jpg", "s8.jpg"];


    const meta = [{info : "Puma T Shirt - OverSized", price : "Rs 1000"}, {info : "Puma T Shirt - OverSized", price : "Rs 1000"}, {info : "Puma T Shirt - OverSized", price : "Rs 1000"}, {info : "Puma T Shirt - OverSized", price : "Rs 1000"}, {info : "Puma T Shirt - OverSized", price : "Rs 1000"}, {info : "Puma T Shirt - OverSized", price : "Rs 1000"}, {info : "Puma T Shirt - OverSized", price : "Rs 1000"}, {info : "Puma T Shirt - OverSized", price : "Rs 1000"}];
    var ind = 0;
    const products = meta.map( m => ({...m, name : `${sAll[ind++]}`}));

    products.forEach(p => console.log(p));

    const[items, setItems] = useState(products);

  return (
    <>
        <h1 className = 'text-xl text-stone-600 font-medium pt-2 mt-2 ml-6'>TOPWEAR</h1>
        <div className = 'sm:grid sm:grid-cols-4 sm:grid-rows-2 sm:ml-20 sm:gap-y-8 flex flex-col items-center p-6'>

        { products.map((p, index) => { return ( 
            <a href='#' key = { index } className = 'w-60 p-3 text-stone-700 bg-stone-100 rounded-md shadow-md'>
            <a href= '#' className = 'flex justify-center'><img className = 'h-60  w-45' src = {require(`../Assets/MEN/Shirts/${p.name}`)}/></a>
            <h1 className = 'text-sm text-center font-medium p-1'>{p.info}</h1>
            <h1 className ='text-sm font-semibold text-center'>{p.price}</h1>
            </a>
        )}) }
        </div>
    </>
  )
}

export default Shirts