import React from 'react'
import arrow from '../img/arrow-logo.png'
import Image from 'next/image'

const Cards = () => {
  return (
    <div className='absolute top-40 lg:top-32 left-32 flex justify-between w-[65%]'>

        {/* card 1 */}
      <div className='relative  lg:w-52 w-80 h-[23vh] lg:h-[20vh] shadow-2xl rounded-3xl bg-gradient-to-br from-red-500 to-red-700 hover:scale-105 hover:duration-300 duration-300 animate-slide-down delay-0'>
        <Image 
            src={arrow}
            alt='arrow-logo'
            height={50}
            className='pointer-events-none lg:h-12 select-none'   
        />

        <p className='absolute bottom-20 lg:bottom-[55px] text-2xl lg:text-lg lg:px-3 text-white/80 px-5 selection:text-yellow-300'>1234 5678 9874 3256</p>

        <div className='absolute bottom-0 h-16 w-[100%] lg:h-12 rounded-b-3xl flex items-center justify-between px-5 bg-gradient-to-r from-black/75 to-black/70'>
            <h3 className='text-white/80 font-bold text-xl lg:text-sm pointer-events-none select-none'>Umair Nawaz</h3>
            <p className='text-white/80 pointer-events-none lg:text-sm select-none'>Exp 11/24</p>
        </div>
      </div>

       {/* card 2 */}
       <div className='relative lg:w-52 w-80 h-[23vh] lg:h-[20vh] bg-white shadow-2xl rounded-3xl bg-gradient-to-br from-lime-400 to-blue-700 hover:scale-105 hover:duration-300 duration-300 animate-slide-down-delay-1 opacity-0 '>
       <Image 
            src={arrow}
            alt='arrow-logo'
            height={50}
            className='pointer-events-none lg:h-12 select-none'   
        />

<p className='absolute bottom-20 lg:bottom-[55px] text-2xl lg:text-lg lg:px-3 text-white/80 px-5 selection:text-yellow-300'>1234 5678 9874 3256</p>

        <div className='absolute bottom-0 lg:h-12 h-16 w-[100%] rounded-b-3xl flex items-center justify-between px-5 bg-gradient-to-r from-black/75 to-black/70'>
            <h3 className='text-white/80 font-bold text-xl lg:text-sm pointer-events-none select-none'>Noman Nawaz</h3>
            <p className='text-white/80 pointer-events-none lg:text-sm select-none'>Exp 11/24</p>
        </div>
      </div>

       {/* card 3 */}
       <div className='relative lg:w-52 w-80 h-[23vh] lg:h-[20vh] bg-white shadow-2xl rounded-3xl bg-gradient-to-br from-blue-600 to-purple-700 hover:scale-105 hover:duration-300 duration-300 animate-slide-down-delay-2 opacity-0'>
       <Image 
            src={arrow}
            alt='arrow-logo'
            height={50}
            className='pointer-events-none lg:h-12 select-none'   
        />

<p className='absolute bottom-20 lg:bottom-[55px] text-2xl lg:text-lg lg:px-3 text-white/80 px-5 selection:text-yellow-300'>1234 5678 9874 3256</p>

<div className='absolute bottom-0 lg:h-12 h-16 w-[100%] rounded-b-3xl flex items-center justify-between px-5 bg-gradient-to-r from-black/75 to-black/70'>
            <h3 className='text-white/80 font-bold text-xl lg:text-sm pointer-events-none select-none'>Salman Nawaz</h3>
            <p className='text-white/80 pointer-events-none lg:text-sm select-none'>Exp 11/24</p>
        </div>
      </div>

       {/* card 4 */}
       <div className='relative lg:w-52 w-80 h-[23vh] lg:h-[20vh] bg-white shadow-2xl rounded-3xl bg-gradient-to-tr from-teal-400 to-blue-600 hover:scale-105 hover:duration-300  duration-300 animate-slide-down-delay-3 opacity-0 '>
       <Image 
            src={arrow}
            alt='arrow-logo'
            height={50}
            className='pointer-events-none lg:h-12 select-none'   
        />

        <p className='absolute bottom-20 lg:bottom-[55px] text-2xl lg:text-lg lg:px-3 text-white/80 px-5 selection:text-yellow-300'>1234 5678 9874 3256</p>

        <div className='absolute bottom-0 lg:h-12 h-16 w-[100%] rounded-b-3xl flex items-center justify-between px-5 bg-gradient-to-r from-black/75 to-black/70'>
            <h3 className='text-white/80 font-bold text-xl lg:text-sm pointer-events-none select-none'>Arsalan Nawaz</h3>
            <p className='text-white/80 pointer-events-none lg:text-sm select-none'>Exp 11/24</p>
        </div>
      </div>

      
    </div>
    
  )
}

export default Cards
