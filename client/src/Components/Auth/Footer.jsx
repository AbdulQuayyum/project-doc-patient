import React from 'react'

const currentYear = new Date().getFullYear()

const Footer = () => {
    return (
        <footer className="bottom-0 w-full font-bold text-center text-black transition-all duration-1000 py-11 dark:text-white">
            {currentYear} &#169; Abdul-Quayyum Alao, All rights reserved
        </footer>
    )
}

export default Footer