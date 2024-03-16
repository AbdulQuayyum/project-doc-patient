import React from 'react'
import { PiArrowFatLinesUpThin } from "react-icons/pi";

const BackToTop = () => {
    if (typeof window === "object") {
        //This code is executed in the browser
        window.addEventListener("scroll", function () {
            const backToTop = document.querySelector(".back-to-top")
            if (this?.scrollY >= 560) backToTop?.classList.add("show-back-to-top")
            else backToTop?.classList.remove("show-back-to-top")
        })
    }
    return (
        <a href="#" className='back-to-top dark:text-white'>
            <PiArrowFatLinesUpThin size={24} className='back-to-top-icon' />
        </a>
    )
}

export default BackToTop