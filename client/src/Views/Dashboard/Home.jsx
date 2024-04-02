import React from 'react'

import { DashboardLayout } from '../../Layout/Dashboard.Layout'

const Dashboard = () => {
    return (
        <DashboardLayout>
            <div className='flex flex-col'>
                <span className='text-4xl lg:text-5xl md:text-start text-center py-6 font-extrabold text-[#000] dark:text-white'>Dashboard</span>
                <ul className='flex flex-col gap-y-2'>
                    <li className='text-[#000] dark:text-white text-base lg:text-lg'>Analytics Overview: Display key metrics and analytics related to patient care, appointment volumes, or other relevant data.</li>
                    <li className='text-[#000] dark:text-white text-base lg:text-lg'>Patient Information: Display basic information about the patient, such as name, age, contact details, etc.</li>
                    <li className='text-[#000] dark:text-white text-base lg:text-lg'>Task Management: Allow users to create and manage tasks related to patient care, such as follow-up appointments or medication reminders.</li>
                </ul>
            </div>
        </DashboardLayout>
    )
}

export default Dashboard