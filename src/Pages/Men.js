import React from 'react'
import T1 from '../Assets/MEN/Shirts/T1.jpg'
import T3 from '../Assets/MEN/Shirts/T3.jpg'
import B3 from '../Assets/MEN/Pants/B3.jpg'
import S3 from '../Assets/MEN/Shoes/S3.jpg'


const Men = () => {
  return (
    <>
        <div className = 'text-stone-500'>
            <h1 className = 'text-2xl  p-4 pt-6 font-semibold ml-4 text-slate-600'>MENS FASHION</h1>
            <div className = 'flex flex-col sm:flex-row justify-center items-center p-2'>
                <div className = 'ml-8'>
                    <a href='#'  className = ''><img loading = 'lazy' className = ' h-80 w-60 rounded-lg' src={T1}/></a>
                    <h1 className = 'text-lg p-3 text-center'>TOPWEAR</h1>
                </div>
                <div className = 'ml-8'>
                    <a href='#'><img loading = 'lazy' className = ' h-80 w-60 rounded-lg' src={B3}/></a>
                    <h1 className = 'text-lg p-3 text-center'>BOTTOMWEAR</h1>
                </div>
                <div className ='ml-8'>
                    <a href='#'  className = ''><img loading = 'lazy' className = ' h-80 w-60 rounded-lg' src={T3}/></a>
                    <h1 className = 'text-lg p-3 text-center'>STYLE</h1>
                </div>
                <div className = 'ml-8'>
                    <a href='#'  className = ''><img loading = 'lazy' className = ' h-80 w-60 rounded-lg ' src={S3}/></a>
                    <h1 className = 'text-lg p-3 text-center'>FOOT WEAR</h1>
                </div>
            </div>
        </div>
    </>
  )
}

export default Men