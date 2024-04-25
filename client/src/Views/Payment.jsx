import React from 'react'
import { Link } from 'react-router-dom'
import { PiArrowFatLinesRightLight } from "react-icons/pi";

import { DocumentTitle } from '../Utilities/DocumentTitle'

const Payment = () => {
    DocumentTitle("No Name Yet || A Medical Platform - Payments Page")
    
    return (
        <div className='flex flex-col-reverse items-center justify-center w-full gap-10 mx-auto px-[10px] mt-0 lg:gap-20 md:mt-20 md:flex-row'>
            <div className='flex flex-col max-w-md lg:max-w-xl'>
                <span className='mb-5 text-4xl lg:text-5xl text-center py-6 font-extrabold text-[#000] dark:text-white'>
                    This where you would make payments for the PRO plan.
                </span>
                <div className='flex items-center justify-center mt-10'>
                    <Link
                        className="flex custom-hover items-center bg-transparent text-lg outlined px-8 md:px-14 font-medium py-2 transition-all duration-150 border-[1px] border-[#000] rounded-md"
                        to="/Dashboard"
                    > Done
                        < PiArrowFatLinesRightLight className='ml-2 hover-icon' />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Payment