import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Shirts(props) {

    const { myArray } = props;

  return (
    <>
        <h1 className = 'text-xl text-stone-600 font-medium pt-2 mt-2 ml-6'>TOPWEAR</h1>
        <div className = 'sm:grid sm:grid-cols-4 sm:grid-rows-2 sm:ml-20 sm:gap-y-8 flex flex-col items-center p-6'>
        { myArray.map((p, index) => { return ( 
            <Link to = {`${p.id}`} key = { index } className = 'w-60 p-3 text-stone-700 bg-stone-100 rounded-md shadow-md'>
            <div className = 'flex justify-center hover:cursor-pointer'><img className = 'h-60  w-45' src = {require(`../Assets/MEN/Shirts/${p.name}`)}/></div>
            <h1 className = 'text-sm text-center font-medium p-1'>{p.info}</h1>
            <h1 className ='text-sm font-semibold text-center'>{p.price}</h1>
            </Link>
        )}) }
        </div>
    </>
  )
}

export default Shirts