import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { GoLinkExternal } from "react-icons/go";
import { VscChevronRight } from "react-icons/vsc";

import { DashboardLayout } from '../../Layout/Dashboard.Layout'
import { DashboardTitle } from '../../Components/Index'
import { DocumentTitle } from '../../Utilities/DocumentTitle'

const Settings = () => {
    DocumentTitle("No Name Yet || A Medical Platform - Settings Page")
    const [openTab, setOpenTab] = useState(1);

    const supportList = [
        {
            name: "Privacy Policy",
            link: "privacy",
        },
        {
            name: "Terms of Services",
            link: "terms",
        },
        {
            name: "Data Protection Policy",
            link: "data",
        },
        {
            name: "Frequently Asked Questions",
            link: "FAQ",
        },
        {
            name: "Contact Us",
            link: "contact",
        },
    ]

    const securityList = [
        {
            name: "Change Password",
            number: 1
        },
        {
            name: "Enable Two Factor Authentication",
            number: 2
        },
        {
            name: "Data Sharing Preferences",
            number: 3
        },
        {
            name: "Family Plan",
            number: 4
        },
    ]

    return (
        <DashboardLayout>
            <div className='flex flex-col'>
                <DashboardTitle Title="Settings Page" />
                <div className='flex flex-col items-start justify-start gap-y-10'>
                    <ul className="flex w-full px-4 py-6 bg-white rounded-lg gap-x-4">
                        <li>
                            <span onClick={() => setOpenTab(1)} className={` ${openTab === 1 ? "border-[#000] border-b-2 text-black" : ""} inline-block px-4 py-2 text-black cursor-pointer`}>
                                General
                            </span>
                        </li>
                        <li>
                            <span onClick={() => setOpenTab(2)} className={` ${openTab === 2 ? "border-[#000] border-b-2 text-black" : ""} inline-block px-4 py-2 text-black cursor-pointer`}>
                                Privacy and Security
                            </span>
                        </li>
                        <li>
                            <span onClick={() => setOpenTab(3)} className={` ${openTab === 3 ? "border-[#000] border-b-2 text-black" : ""} inline-block px-4 py-2 text-black cursor-pointer`}>
                                Help and Support
                            </span>
                        </li>
                    </ul>
                    <div className="flex justify-start transition-all duration-150">
                        <div className={openTab === 1 ? "block" : "hidden"}>
                            <div className="flex flex-col w-full max-w-[600px] justify-start gap-x-8 px-8 py-6 bg-white rounded-xl">
                                <span className='text-[#000] dark:text-white text-base lg:text-lg'>Profile Settings: Allow users to update their profile information, including name, contact details, and preferences.</span>
                            </div>
                        </div>
                        <div className={openTab === 2 ? "block" : "hidden"}>
                            <div className="flex flex-col w-full sm:w-[600px] justify-start gap-x-8 px-8 py-6 bg-white rounded-xl">
                                {securityList.map((items, index) => (
                                    <div key={index} className='flex justify-between w-full py-8 items-center gap-x-12 border-b border-[#ccc]'>
                                        <span className='text-black font-[600]'>{items.name}</span>
                                        <span className='cursor-pointer ' >
                                            <VscChevronRight color='#000' size={18} />
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={openTab === 3 ? "block" : "hidden"}>
                            <div className="flex flex-col w-full sm:w-[600px] justify-start gap-x-8 px-8 py-6 bg-white rounded-xl">
                                {supportList.map((items, index) => (
                                    <div key={index} className='flex justify-between w-full py-8 items-center gap-x-12 border-b border-[#ccc]'>
                                        <span className='text-black font-[600]'>{items.name}</span>
                                        <Link to={`/${items.link}`}>
                                            <GoLinkExternal color='#000' size={18} />
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}

export default Settings