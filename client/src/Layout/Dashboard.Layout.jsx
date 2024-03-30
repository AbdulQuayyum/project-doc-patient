import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { DashboardHeader, Sidebar } from '../Components/Index'
import { UseStateContext } from "../Contexts/Dashboard.Context";

export const DashboardLayout = ({ children }) => {
    const location = useLocation();
    const { activeMenu } = UseStateContext();

    useEffect(() => {
        document.querySelector("html").style.scrollBehavior = "auto";
        window.scroll({ top: 0 });
        document.querySelector("html").style.scrollBehavior = "";
    }, [location.pathname]);

    return (
        <div>
            <div className="relative flex min-h-screen antialiased transition-all duration-150 grainy">
                {activeMenu ? (
                    <div className="fixed bg-white w-72 sidebar dark:bg-[#283046]">
                        <Sidebar />
                    </div>
                ) : (<div className="w-0 bg-none"> <Sidebar /> </div>)}
                <div className={activeMenu ? "h-full lg:ml-72 w-full" : "h-full w-full"} >
                    <div className="w-full lg:static navbar ">
                        <DashboardHeader />
                    </div>
                    <div className="z-40 p-4 onboard">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}