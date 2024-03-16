import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { PiArrowFatLinesRightLight } from "react-icons/pi";

import { Image01, Image02, Image03, Image04 } from '../../Assets/Index';

const Hero = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const ImageList = [Image01, Image02, Image03, Image04]

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % ImageList.length);
        }, 10000); // 10 seconds in milliseconds

        return () => clearInterval(interval);
    }, []);

    const currentImageUrl = ImageList[currentImageIndex];

    return (
        <div>
            <div className='flex flex-col-reverse items-center justify-center w-full gap-10 mx-auto mt-0 lg:gap-20 md:mt-20 md:flex-row'>
                <div className='flex flex-col max-w-md lg:max-w-xl'>
                    <span className='mb-5 text-4xl lg:text-5xl py-6 font-extrabold text-[#000]'>
                        A Secure and Confidential Medical Platform
                    </span>
                    <span className='text-[#aaa] text-base lg:text-lg'>
                        At D'Accubin, we understand the significance of your medical records and their role in ensuring comprehensive and personalized healthcare. Our platform not only facilitates seamless access to medical services but also prioritizes the secure management and storage of your valuable health information.
                    </span>
                    <div className='flex items-center justify-center mt-10 sm:justify-start'>
                        <Link
                            className="flex custom-hover items-center bg-transparent text-lg outlined px-8 md:px-14 font-medium py-2 transition-all duration-150 border-[1px] border-[#000] rounded-full"
                            to="/Register"
                        > Get Started
                            < PiArrowFatLinesRightLight className='ml-2 hover-icon' />
                        </Link>
                    </div>
                </div>
                <div
                    className='hero-img'
                    style={{ backgroundImage: `url(${currentImageUrl})` }}>
                </div>
            </div>
        </div>
    )
}

export default Hero