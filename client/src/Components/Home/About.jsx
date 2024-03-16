import React, { useState } from 'react'

import CardDesign from './CardDesign'
import { Img01, Img02, Img03, Img04, Img05 } from '../../Assets/Index';

const data = [
    {
        id: "01",
        imgUrl: Img01,
        title: "Comprehensive Medical Records",
        desc: "Store and manage your medical records securely within our platform, including vital signs, test results, prescriptions, and treatment histories, empowering you and your healthcare providers with accurate and up-to-date information."
    },
    {
        id: "02",
        imgUrl: Img02,
        title: "Appointment Booking",
        desc: "Schedule consultations and appointments with trusted healthcare professionals, with the assurance that your medical records will be readily available to facilitate informed discussions and personalized care plans."
    },
    {
        id: "03",
        imgUrl: Img03,
        title: "Telemedicine Consultations",
        desc: "Access virtual consultations and telemedicine services, knowing that your medical records are securely accessible to healthcare providers, ensuring continuity of care and accurate diagnosis."
    },
    {
        id: "04",
        imgUrl: Img04,
        title: "Secure Communication",
        desc: "Engage in confidential conversations with your healthcare providers through our encrypted messaging platform, allowing you to discuss sensitive health matters and share pertinent information with confidence."
    },
    {
        id: "05",
        imgUrl: Img05,
        title: "Convenience and Accessibility",
        desc: " Enjoy the convenience of accessing your medical records and healthcare services anytime, anywhere, through our user-friendly platform, empowering you to take control of your health on your terms."
    },
]

const About = () => {
    const [active, setActive] = useState('02');

    return (
        <section className='flex justify-center px-6 py-12 sm:p-16 xs:p-8'>
            <div
                className="2xl:max-w-[1280px] w-full mx-auto flex flex-col"
            >
                <span
                    className='mb-5 text-4xl lg:text-5xl py-6 flex items-center justify-center font-extrabold text-[#000]'>
                    Why Should you choose our Platform?
                </span>
                <div className="mt-[50px] flex xl:flex-row flex-col min-h-[70vh] gap-5">
                    {data.map((item, index) => (
                        <CardDesign
                            key={item.id}
                            {...item}
                            index={index}
                            active={active}
                            handleClick={setActive}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default About