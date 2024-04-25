import React, { useState, useRef, useEffect } from 'react';
import { HiMenuAlt2 } from "react-icons/hi"
import { CiUser } from "react-icons/ci";
import { PiUserThin } from "react-icons/pi";

import { UseStateContext } from "../../Contexts/Dashboard.Context"
import DashboardHeaderDropdown from "./HeaderDropdown";

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
    <div content={title} position="BottomCenter">
        <button
            type="button"
            onClick={() => customFunc()}
            style={{ color }}
            className="relative p-3 text-xl rounded-full hover:bg-light-gray"
        >
            <span
                style={{ background: dotColor }}
                className="absolute inline-flex w-2 h-2 rounded-full right-4 top-3"
            />
            {icon}
        </button>
    </div>
);

const DashboardHeader = () => {
    const { activeMenu, setActiveMenu, setScreenSize, screenSize } = UseStateContext();
    const [isDropdown, setIsDropdown] = useState(false)
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
          if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsDropdown(false);
          }
        };
    
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, []);

    const HandleOpen = () => {
        setIsDropdown((prev) => !prev);
    };

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);

        window.addEventListener("resize", handleResize);

        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (screenSize <= 1024) {
            setActiveMenu(false);
        } else {
            setActiveMenu(true);
        }
    }, [screenSize]);

    const HandleActiveMenu = () => setActiveMenu(!activeMenu);
    return (
        <nav className="relative transition-all border-b border-gray-200 h-14 bg-white/75 backdrop-blur-lg">
            <div className="flex items-center justify-between px-4 border-b h-14 border-zinc-200">
                {screenSize <= 1024 &&
                    <NavButton
                        title="Menu"
                        customFunc={HandleActiveMenu}
                        icon={<HiMenuAlt2 className="mt-1 dark:text-white" />}
                    />
                }
                <div className="flex-grow" />
                <div onClick={HandleOpen} className='relative flex p-2 border rounded-lg cursor-pointer border-primary'>
                    <CiUser size={20} color='#101042' />
                </div>
                {isDropdown && (
                    <DashboardHeaderDropdown customRef={dropdownRef} />
                )}
            </div>
        </nav>
    )
}

export default DashboardHeader