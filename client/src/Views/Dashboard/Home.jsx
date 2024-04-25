import React from 'react'

import { DashboardLayout } from '../../Layout/Dashboard.Layout'
import { DashboardTitle } from '../../Components/Index'
import { DocumentTitle } from '../../Utilities/DocumentTitle'

const Dashboard = () => {
    DocumentTitle("No Name Yet || A Medical Platform - Dashboard Page")
    return (
        <DashboardLayout>
            <div className='flex flex-col'>
                <DashboardTitle Title="Dashbaord Page" />
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