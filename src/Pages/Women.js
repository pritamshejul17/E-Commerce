import React from 'react'
import W1 from '../Assets/WOMEN/W1.jpg'
import W2 from '../Assets/WOMEN/W2.jpg'
import W3 from '../Assets/WOMEN/W3.jpg'
import W4 from '../Assets/WOMEN/W4.jpg'


const Women = () => {
  return (
    <>
        <div className = 'text-stone-500'>
            <h1 className = 'text-2xl  p-4 pt-6 font-semibold ml-4 text-stone-600'>WOMENS FASHION</h1>
            <div className = 'flex flex-col sm:flex-row justify-center items-center p-2'>
                <div className ='ml-8'>
                    <a href='#'  className = ''><img loading = 'lazy' className = ' h-80 w-60 rounded-lg' src={W3}/></a>
                    <h1 className = 'text-lg p-3 text-center'>WESTERN</h1>
                </div>
                <div className = 'ml-8'>
                    <a href='#'  className = ''><img loading = 'lazy' className = ' h-80 w-60 rounded-lg' src={W1}/></a>
                    <h1 className = 'text-lg p-3 text-center'>INDIAN</h1>
                </div>
                <div className = 'ml-8'>
                    <a href='#'><img loading = 'lazy' className = ' h-80 w-60 rounded-lg' src={W2}/></a>
                    <h1 className = 'text-lg p-3 text-center'>FASHION</h1>
                </div>
                <div className = 'ml-8'>
                    <a href='#'  className = ''><img loading = 'lazy' className = ' h-80 w-60 rounded-lg ' src={W4}/></a>
                    <h1 className = 'text-lg p-3 text-center'>FOOT WEAR</h1>
                </div>
            </div>
        </div>
    </>
  )
}

export default Women