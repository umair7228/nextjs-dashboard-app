import React from 'react'
import { BiTransfer } from "react-icons/bi";
import { FaWallet } from "react-icons/fa6";
import { GoPlusCircle } from "react-icons/go";
import { FaUsers } from "react-icons/fa";
import umair from "../img/umair.png"
import Image from 'next/image'

const Transection = () => {
  return (
    <>
      <div className='absolute top-40 right-7 z-[5px] bg-white rounded-3xl h-[55%] w-[17%] shadow-2xl flex flex-col justify-between p-6 animate-slide-right'>

        {/* icon & heading */}
        <div className='flex '>
          <span className=' p-2 rounded-full bg-gradient-to-b from-[#ff007f] to-[#8b00ff]'><BiTransfer className='text-slate-200 h-6 w-6 rotate-90'/></span>
          <h2 className='font-bold text-3xl text-black pl-6 pointer-events-none select-none'>Transection</h2>
        </div>


        {/* transections main */}
        <div className='absolute top-24 bg-zinc-200 rounded-[20px] h-[60%] w-[87%] shadow-2xl flex flex-col justify-center pointer-events-none select-none'>

          {/* salary */}
          <div className=' bg-white rounded-2xl flex h-[18%] w-[93%] mx-3 my-1 items-center px-3'>
            <span className=' p-2 rounded-full h-8 w-8 bg-gradient-to-b from-[#ff007f] to-[#8b00ff] '><FaWallet className='text-slate-200 h-4 w-4 rotate-90'/></span>
            <h5 className='pl-3 font-bold text-zinc-500'>Salary</h5>
            <h6 className='absolute right-6 font-bold text-green-500'>$5000</h6>
          </div>

          {/* Admin Fee */}
          <div className=' bg-white rounded-2xl flex h-[18%] w-[93%] mx-3 my-1 items-center px-3'>
            <span className=' p-2 rounded-full h-8 w-8 bg-gradient-to-b from-[#ff007f] to-[#8b00ff] '><FaWallet className='text-slate-200 h-4 w-4 rotate-90'/></span>
            <h5 className='pl-3 font-bold text-zinc-500'>Admin Fee</h5>
            <h6 className='absolute right-6 font-bold text-red-500'>$100</h6>
          </div>

          {/* salary */}
          <div className=' bg-white rounded-2xl flex h-[18%] w-[93%] mx-3 my-1 items-center px-3'>
            <span className=' p-2 rounded-full h-8 w-8 bg-gradient-to-b from-[#ff007f] to-[#8b00ff] '><FaWallet className='text-slate-200 h-4 w-4 rotate-90'/></span>
            <h5 className='pl-3 font-bold text-zinc-500'>Designer</h5>
            <h6 className='absolute right-6 font-bold text-green-500'>$6000</h6>
          </div>

          {/* rent */}
          <div className=' bg-white rounded-2xl flex h-[18%] w-[93%] mx-3 my-1 items-center px-3'>
            <span className=' p-2 rounded-full h-8 w-8 bg-gradient-to-b from-[#ff007f] to-[#8b00ff] '><FaWallet className='text-slate-200 h-4 w-4 rotate-90'/></span>
            <h5 className='pl-3 font-bold text-zinc-500'>Rent</h5>
            <h6 className='absolute right-6 font-bold text-green-500'>$8000</h6>
          </div>

          {/* Developer */}
          <div className=' bg-white rounded-2xl flex h-[18%] w-[93%] mx-3 my-1 items-center px-3'>
            <span className=' p-2 rounded-full h-8 w-8 bg-gradient-to-b from-[#ff007f] to-[#8b00ff] '><GoPlusCircle className='text-slate-200 h-4 w-4 rotate-90'/></span>
            <h5 className='pl-3 font-bold text-zinc-500'>Developer</h5>
            <h6 className='absolute right-6 font-bold text-red-500'>$2000</h6>
          </div>

        </div>
          <button
            className='absolute bottom-5 font-bold text-2xl select-none bg-gradient-to-r from-[#ff007f] to-[#8b00ff] bg-clip-text text-transparent border-[3px] shadow-lg border-zinc-300 rounded-[40px] w-[90%] h-14'
            >View All
          </button>

      </div>


      {/* recent section */}
      <div className='absolute bottom-8 right-7 z-[5px] bg-white rounded-3xl h-[22%] w-[17%] shadow-2xl flex flex-col justify-center p-6 animate-slide-right'>

        {/* icon & heading */}
        <div className='flex '>
          {/* heading  */}
          <div className='absolute top-6 flex'>
            <span className=' p-2 rounded-full bg-gradient-to-b from-[#ff007f] to-[#8b00ff]'><FaUsers className='text-slate-200 h-6 w-6'/></span>
            <h2 className='font-bold text-3xl text-black pl-6 pointer-events-none select-none'>Recent</h2>
          </div>

          {/* profle images */}
          <div className='flex items-center justify-center pt-10'>
            <span className=' p-2 rounded-full h-14 w-14 bg-zinc-200 flex items-center justify-center'>
              <Image 
                src={umair}
                alt="umair"
                width={50}
                height={50}
                className='h-14 w-14 pointer-events-none select-none'
              />
            </span>
            <span className='p-2 rounded-full h-14 w-14 bg-zinc-200 flex items-center justify-center'>
              <Image 
                src={umair}
                alt="umair"
                width={50}
                height={50}
                className='h-14 w-14 pointer-events-none select-none'
              />
            </span>
            <span className='p-2 rounded-full h-14 w-14 bg-zinc-200 flex items-center justify-center'>
              <Image 
                src={umair}
                alt="umair"
                width={50}
                height={50}
                className='h-14 w-14 pointer-events-none select-none'
              />
            </span>
          </div>
        
        </div>


      </div>
    </>
  )
}

export default Transection
