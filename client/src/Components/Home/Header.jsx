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
            className="sm:flex hidden items-center bg-transparent text-lg outlined px-8 md:px-14 font-medium py-2 text-[#000] transition-all duration-150 border-[1px] border-transparent rounded-full hover:bg-black hover:text-white"
            to="/Login"
          > Sign in
          </Link>
          <Link
            className="flex items-center bg-transparent text-lg outlined px-8 md:px-14 font-medium py-2 hover:text-[#fff] transition-all duration-150 border-[1px] border-[#000] rounded-full hover:bg-[#000] text-[#000]"
            to="/Register"
          > Get Started
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header