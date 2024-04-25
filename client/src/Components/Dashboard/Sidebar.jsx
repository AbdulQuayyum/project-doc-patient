import React from 'react'
import { NavLink } from "react-router-dom";
import cogoToast from '@successtar/cogo-toast';
import { TbArrowBigLeftLines } from "react-icons/tb"
import { RxDashboard } from "react-icons/rx"
import { PiFilesThin } from "react-icons/pi"
import { IoSettingsOutline } from "react-icons/io5"
import { CgLogOut } from "react-icons/cg"

import Logo from "/logo.png"
import { UseStateContext } from '../../Contexts/Dashboard.Context';

const Sidebar = () => {
    const { activeMenu, setActiveMenu, screenSize } = UseStateContext();

    const delay = ms => new Promise(
        resolve => setTimeout(resolve, ms)
    )

    const HandleCloseSideBar = () => {
        if (activeMenu !== undefined && screenSize <= 1024) {
            setActiveMenu(false);
        }
    };

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

    const activeLink = "flex items-center px-4 py-2 my-2 text-[#000] border-l-4 border-[#000] transition-all duration-150 bg-[#e5e7eb] dark:bg-gray-700 dark:text-gray-200";
    const normalLink = "flex items-center px-4 py-2 my-2 text-gray-400 border-l-4 border-transparent transition-all duration-150 bg-transparent dark:text-gray-400 hover:bg-[$F4F4F5] hover:text-black dark:hover:bg-gray-700 dark:hover:text-gray-200";

    return (
        <div className="z-50 flex flex-col min-h-screen py-2 sm:py-4 w-72 dark:border-gray-600">
            {activeMenu && (
                <>
                    <div className="flex items-center justify-between pl-10">
                        <div>
                            <img src={Logo} alt='Logo' className='object-contain h-auto w-14' />
                        </div>
                        {screenSize <= 1024 &&
                            <button
                                onClick={() => setActiveMenu(!activeMenu)}
                                className="items-center block p-3 text-xl rounded-full hover:bg-light-gray"
                            >
                                <TbArrowBigLeftLines size={22} color='black' />
                            </button>
                        }
                    </div>
                    <div className="flex flex-col justify-between flex-1 h-screen">
                        <div className="flex flex-col justify-between mt-10 h-[85vh]">
                            <div className="transition-all duration-150">
                                <NavLink
                                    to="/Dashboard"
                                    onClick={HandleCloseSideBar}
                                    className={({ isActive }) => (isActive ? activeLink : normalLink)}
                                >
                                    <RxDashboard size={22} className="ml-4" />
                                    <span className="py-2 mx-4 text-lg font-semibold">Home</span>
                                </NavLink>
                                <NavLink
                                    to="/Records"
                                    onClick={HandleCloseSideBar}
                                    className={({ isActive }) => (isActive ? activeLink : normalLink)}
                                >
                                    <PiFilesThin size={22} className="ml-4" />
                                    <span className="py-2 mx-4 text-lg font-semibold">Records</span>
                                </NavLink>
                                <NavLink
                                    to="/Settings"
                                    onClick={HandleCloseSideBar}
                                    className={({ isActive }) => (isActive ? activeLink : normalLink)}
                                >
                                    <IoSettingsOutline size={22} className="ml-4" />
                                    <span className="py-2 mx-4 text-lg font-semibold">Settings</span>
                                </NavLink>
                            </div>
                            <div className="mb-10 sm:mb-0">
                                <button
                                    onClick={HandleLogout}
                                    className="flex items-center px-4 py-2 my-2 text-gray-400 transition-all duration-500 transform rounded-md dark:text-gray-400 hover:bg-[$F4F4F5] hover:text-black dark:hover:bg-gray-700 dark:hover:text-gray-200"
                                >
                                    <CgLogOut size={22} className="ml-4" />
                                    <span className="py-2 mx-4 text-lg font-semibold">Logout</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    )

}

export default Sidebar;