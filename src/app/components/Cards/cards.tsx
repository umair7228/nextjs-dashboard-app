import React from 'react'
import arrow from '../img/arrow-logo.png'
import Image from 'next/image'

const Cards = () => {
  return (
    <div className='absolute top-40 left-40 flex justify-between w-[71%]'>

        {/* card 1 */}
      <div className='relative w-80 h-[23vh] shadow-2xl rounded-3xl bg-gradient-to-br from-red-500 to-red-700 hover:scale-105 hover:duration-300 duration-300 animate-slide-down delay-0'>
        <Image 
            src={arrow}
            alt='arrow-logo'
            height={75}
            className='pointer-events-none select-none'   
        />

        <p className='absolute bottom-20 text-2xl text-white/80 px-5 selection:text-yellow-300'>1234 5678 9874 3256</p>

        <div className='absolute bottom-0 h-16 w-[100%] rounded-b-3xl flex items-center justify-between px-5 bg-gradient-to-r from-black/75 to-black/70'>
            <h3 className='text-white/80 font-bold text-xl pointer-events-none select-none'>Umair Nawaz</h3>
            <p className='text-white/80 pointer-events-none select-none'>Exp 11/24</p>
        </div>
      </div>

       {/* card 2 */}
       <div className='relative w-80 h-[23vh] bg-white shadow-2xl rounded-3xl bg-gradient-to-br from-lime-400 to-blue-700 hover:scale-105 hover:duration-300 duration-300 animate-slide-down-delay-1 opacity-0 '>
        <Image 
            src={arrow}
            alt='arrow-logo'
            height={75}   
            className='pointer-events-none select-none'
        />

        <p className='absolute bottom-20 text-2xl text-white/80 px-5 selection:text-yellow-300'>1234 5678 9874 3256</p>

        <div className='absolute bottom-0 h-16 w-[100%] rounded-b-3xl flex items-center justify-between px-5 bg-gradient-to-r from-black/75 to-black/70'>
            <h3 className='text-white/80 font-bold text-xl pointer-events-none select-none'>Noman Nawaz</h3>
            <p className='text-white/80 pointer-events-none select-none'>Exp 11/24</p>
        </div>
      </div>

       {/* card 3 */}
       <div className='relative w-80 h-[23vh] bg-white shadow-2xl rounded-3xl bg-gradient-to-br from-blue-600 to-purple-700 hover:scale-105 hover:duration-300 duration-300 animate-slide-down-delay-2 opacity-0'>
        <Image 
            src={arrow}
            alt='arrow-logo'
            height={75}   
            className='pointer-events-none select-none'
        />

        <p className='absolute bottom-20 text-2xl text-white/80 px-5 selection:text-yellow-300'>1234 5678 9874 3256</p>

        <div className='absolute bottom-0 h-16 w-[100%] rounded-b-3xl flex items-center justify-between px-5 bg-gradient-to-r from-black/75 to-black/70'>
            <h3 className='text-white/80 font-bold text-xl pointer-events-none select-none'>Salman Nawaz</h3>
            <p className='text-white/80 pointer-events-none select-none'>Exp 11/24</p>
        </div>
      </div>

       {/* card 4 */}
       <div className='relative w-80 h-[23vh] bg-white shadow-2xl rounded-3xl bg-gradient-to-tr from-teal-400 to-blue-600 hover:scale-105 hover:duration-300  duration-300 animate-slide-down-delay-3 opacity-0 '>
        <Image 
            src={arrow}
            alt='arrow-logo'
            height={75}   
            className='pointer-events-none select-none'
        />

        <p className='absolute bottom-20 text-2xl text-white/80 px-5 selection:text-yellow-300'>1234 5678 9874 3256</p>

        <div className='absolute bottom-0 h-16 w-[100%] rounded-b-3xl flex items-center justify-between px-5 bg-gradient-to-r from-black/75 to-black/70'>
            <h3 className='text-white/80 font-bold text-xl pointer-events-none select-none'>Arsalan Nawaz</h3>
            <p className='text-white/80 pointer-events-none select-none'>Exp 11/24</p>
        </div>
      </div>

      
    </div>
    
  )
}

export default Cards
