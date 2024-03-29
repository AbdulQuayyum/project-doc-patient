import React, { useState } from 'react'
import { Link } from "react-router-dom";

import Logo from "/logo.png";

const Header = () => {
  return (
    <div className='navbar-container'>
      <div className="flex w-full max-w-[1440px] items-center justify-between px-4 py-2">
        <Link to="/" className='flex items-center logo gap-x-4'>
          <img src={Logo} alt='Logo' className='object-contain w-auto h-10' />
        </Link>
        <div className='flex items-center gap-2 gap-x-4'>
          <Link
            className="items-center hidden px-4 py-2 text-lg font-medium text-black transition-all duration-150 sm:flex"
            to="/Pricing"
          > Pricing
          </Link>
          <Link
            className="items-center hidden px-4 py-2 text-lg font-medium text-black transition-all duration-150 sm:flex"
            to="/Login"
          > Sign in
          </Link>
          <Link
            className="flex items-center bg-black text-white text-lg outlined px-8 md:px-14 font-medium py-2 hover:text-[#000] dark:hover:text-white transition-all duration-150 border-[1px] border-[#000] dark:border-white rounded-md hover:bg-transparent dark:hover:bg-white dark:text-white"
            to="/Register"
          > Doctors
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header