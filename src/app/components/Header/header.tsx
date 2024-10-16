import React from 'react'
import Image from 'next/image'
import logo from '../img/logo.png'
import { IoCog } from "react-icons/io5";
import { FaBell } from "react-icons/fa6";
import { MdAccountCircle } from "react-icons/md";

const Header = () => {
  return (
    // main div 
    <header className='h-80 lg:h-52 w-full z-[4px] bg-black rounded-b-[40px] flex justify-between px-20 py-14 lg:py-10'>
        <div className='text-white items-center'>
            {/* image  */}
            <div className='flex items-center pointer-events-none select-none'>
                <Image
                    src={logo}
                    alt="My Logo"
                    width={50}
                    height={100}
                    priority
                />
                <div>
                    <h1 className='pl-14 text-4xl font-mono font-bold pointer-events-none select-none text-white/90'>Morning Jude</h1>
                    <p className='pl-14 text-sm text-slate-300 pointer-events-none select-none'>Free Account</p>
                </div>
            </div>
        </div>
        {/* navigation links  */}
        <div className='flex items-center absolute right-20'>
            <input
                className='h-10 mr-14 w-96 rounded-3xl bg-zinc-800 text-zinc-200 px-8'
                type="text" placeholder='Search..' 
                />
            <IoCog className='text-white ml-7 w-8 h-8' />
            <FaBell className='text-white ml-7 w-8 h-8' />
            <MdAccountCircle className='text-white ml-7 w-8 h-8' />
        </div>
    </header>
  )
}

export default Header;
