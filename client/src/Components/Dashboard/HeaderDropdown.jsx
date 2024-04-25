import React from 'react'
import { Link } from 'react-router-dom';
import cogoToast from '@successtar/cogo-toast';
import { IoSettingsOutline } from "react-icons/io5"
import { CgLogOut } from "react-icons/cg"

const DashboardHeaderDropdown = ({ customRef }) => {

    const delay = ms => new Promise(
        resolve => setTimeout(resolve, ms)
    )

    const HandleLogout = () => {
        cogoToast.success(
            <div>
                <b>Success</b>
                <div>User logged out successfully</div>
            </div>, { position: 'top-right' }
        )
        async function nextPage() {
            await delay(2000)
            window.location.reload()
        }
        nextPage()
    }

    return (
        <div ref={customRef} className='absolute flex-col items-start justify-start w-full p-8 transition-all duration-150 bg-white rounded-lg right-3 max-w-72 lg:flex gap-y-3 top-16'>
            <div className='flex flex-col items-start'>
                <span className='py-2'>Welcome back</span>
                <span className='text-[#848AA1] py-2 text-[14px]'>test@test.com</span>
            </div>
            <Link to='/Settings' className='flex items-center w-full pb-3 mb-8 gap-x-2'>
                <IoSettingsOutline size={18} color='#101042' />
                <span>Settings </span>
            </Link>
            <div onClick={HandleLogout} className='flex items-center gap-x-2'>
                <CgLogOut size={24} color='red' />
                <span className="text-[#ff0000] py-2 text-start w-full text-[16px] font-[400] cursor-pointer bg-transparent">
                    Logout
                </span>
            </div>
        </div>
    )
}

export default DashboardHeaderDropdown