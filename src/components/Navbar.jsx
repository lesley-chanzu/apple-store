import React from 'react'
import {navItems} from '../data/index'
const Navbar = () => {
  return (
    <div className='2xl:w-80 xl:w-52 w-44 h-full bg-[#f8f8f8] flex flex-col justify-between pt-5 pl-6 pb-14 md:pb-0'>
        <a href="#" className="2xl:text-2xl xl:text-xl font-light text-red-600 mb-14 tracking-wider">
            Apple Store
        </a>
        <div className='flex flex-col flex-grow'>
    <a href="#" className="xl:w-36 lg:w-32 w-30 flex items-center justify-between my-3.5 text-left cursor-pointer">
        <i className="bx bx-home-alt-2 text-xl text-pink-400"></i>
        <span className="text-sm text-gray-500 mr-auto mx-2.2 tracking-wider">Home</span>
        <i className="text-lg text-yellow-400 bx bx-folder"></i>
    </a>
        </div>   
    </div>
  )
}

export default Navbar