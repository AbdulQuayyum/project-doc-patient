import React, { createContext, useContext, useState } from 'react';

const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
    const [screenSize, setScreenSize] = useState(undefined);
    const [activeMenu, setActiveMenu] = useState(true);

    return (
        <DashboardContext.Provider value={{ activeMenu, screenSize, setScreenSize, setActiveMenu }}>
            {children}
        </DashboardContext.Provider>
    );
};

export const UseStateContext = () => useContext(DashboardContext);