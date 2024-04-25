import React from 'react'
import { Link } from 'react-router-dom'
import { IoHelpCircleOutline } from 'react-icons/io5'
import { PiCheckBold } from 'react-icons/pi'
import { TiCancelOutline } from 'react-icons/ti'
import { TbArrowBigRightLines } from 'react-icons/tb'

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../Components/UI/Tooltip'
import HomeLayout from '../Layout/Home.Layout'
import { DocumentTitle } from '../Utilities/DocumentTitle'

const Pricing = () => {
    DocumentTitle("No Name Yet || Pricing Page - Pricing Page")

    const user = false

    const pricingItems = [
        {
            plan: 'Free',
            tagline: 'For individual account',
            amount: 0,
            features: [
                {
                    text: 'Secured Medical Records',
                    footnote: 'Your medical records are secure and safe due to our end to end encryption standards',
                },
                {
                    text: '1GB file size limit',
                    footnote: 'Allow users to upload files up to 1 gigabyte in size, providing ample space for medical documents and reports',
                },
                {
                    text: 'Family Account',
                    footnote: 'This feature allows families to manage and access the health records of all their members conveniently',
                    negative: true,
                },
                {
                    text: 'Telehealth Integration',
                    footnote: 'This feature allows users to schedule virtual appointments with healthcare providers and access remote medical consultations as needed',
                    negative: true,
                },
                {
                    text: 'Priority support',
                    negative: true,
                },
            ],
        },
        {
            plan: 'Pro',
            tagline: 'For a family account',
            amount: 999.99,
            features: [
                {
                    text: 'Secured Medical Records',
                    footnote: 'Your medical records are secure and safe due to our end to end encryption standards',
                },
                {
                    text: '10GB file size limit',
                    footnote: 'Allow users to upload files up to 10 gigabyte in size, enabling users to store larger medical files and documents with ease',
                },
                {
                    text: 'Family account',
                    footnote: 'This feature allows families to manage and access the health records of all their members conveniently',
                },
                {
                    text: 'Telehealth Integration',
                    footnote: 'This feature allows users to schedule virtual appointments with healthcare providers and access remote medical consultations as needed',
                },
                {
                    text: 'Priority support',
                },
            ],
        },
    ]

    return (
        <HomeLayout>
            <div className='flex flex-col items-center justify-center w-full mt-32 md:mt-20'>
                <div className='flex flex-col max-w-md lg:max-w-xl'>
                    <span className='mb-2 text-4xl lg:text-5xl text-center py-6 font-extrabold text-[#000] dark:text-white'>
                        PRICING
                    </span>
                    <span className='text-[#000] dark:text-white text-center text-base lg:text-lg'>
                        Whether you are just trying out our service or you need more we got you covered
                    </span>
                </div>
                <div className="grid grid-cols-1 gap-10 pt-12 lg:grid-cols-2">
                    <TooltipProvider>
                        {pricingItems.map(({ plan, tagline, amount, features }) => {

                            return (
                                <div key={plan}
                                    className={cn('relative rounded-2xl bg-white shadow-lg', { 'border-2 border-blue-600 shadow-blue-200': plan === 'Pro', 'border border-gray-200': plan !== 'Pro', })} >
                                    {plan === 'Pro' && (
                                        <div className="absolute left-0 right-0 w-32 px-3 py-2 mx-auto text-sm font-medium text-white rounded-full -top-5 bg-gradient-to-r from-blue-600 to-cyan-600">
                                            Upgrade now
                                        </div>
                                    )}

                                    <div className="p-5">
                                        <h3 className="my-3 text-3xl font-bold text-center font-display">
                                            {plan}
                                        </h3>
                                        <p className="text-center text-gray-500">{tagline}</p>
                                        <p className="my-5 text-6xl font-semibold text-center font-display">
                                            ₦{amount}
                                        </p>
                                        <p className="text-center text-gray-500">per month</p>
                                    </div>
                                    <ul className="px-8 my-10 space-y-5">
                                        {features.map(({ text, footnote, negative }) => (
                                            <li key={text} className="flex space-x-5">
                                                <div className="flex-shrink-0">
                                                    {negative ? (
                                                        <TiCancelOutline className="w-6 h-6 text-gray-300" />
                                                    ) : (
                                                        <PiCheckBold className="w-6 h-6 text-blue-500" />
                                                    )}
                                                </div>
                                                {footnote ? (
                                                    <div className="flex items-center space-x-1">
                                                        <p className={cn('text-gray-600', { 'text-gray-400': negative, })} >
                                                            {text}
                                                        </p>
                                                        <Tooltip delayDuration={300}>
                                                            <TooltipTrigger className="cursor-default ml-1.5">
                                                                <IoHelpCircleOutline className="w-4 h-4 text-zinc-500" />
                                                            </TooltipTrigger>
                                                            <TooltipContent className="p-2 w-80">
                                                                {footnote}
                                                            </TooltipContent>
                                                        </Tooltip>
                                                    </div>
                                                ) : (
                                                    <p className={cn('text-gray-600', { 'text-gray-400': negative, })}>
                                                        {text}
                                                    </p>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="border-t border-gray-200" />
                                    <div className="p-5">
                                        {plan === "Free" ? (
                                            <Link to={user ? "/Dashboard" : "/Register"} className='h-11 border-[1px] border-black px-8 inline-flex items-center justify-center w-full text-sm font-medium transition-colors rounded-md ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 x`'>
                                                {user ? 'Upgrade now' : 'Sign up'}
                                                <TbArrowBigRightLines className="h-5 w-5 ml-1.5" />
                                            </Link>
                                        ) : (
                                            <Link to={user ? "/Dashboard" : "/Register"} className='inline-flex items-center justify-center w-full px-8 text-sm font-medium text-white transition-colors bg-black rounded-md h-11 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 '>
                                                {user ? 'Upgrade now' : 'Sign up'}
                                                <TbArrowBigRightLines className="h-5 w-5 ml-1.5" />
                                            </Link>
                                        )}
                                    </div>
                                </  div>
                            )
                        })}
                    </TooltipProvider>
                </div>
            </div>
        </HomeLayout>
    )
}

export default Pricing