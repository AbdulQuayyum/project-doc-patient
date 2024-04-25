import React from 'react'

import { DashboardLayout } from '../../Layout/Dashboard.Layout'
import { DashboardTitle } from '../../Components/Index'
import { DocumentTitle } from '../../Utilities/DocumentTitle'

const Settings = () => {
    DocumentTitle("No Name Yet || A Medical Platform - Settings Page")
    
    return (
        <DashboardLayout>
            <div className='flex flex-col'>
                <DashboardTitle Title="Settings Page" />
                <ul className='flex flex-col gap-y-2'>
                    <li className='text-[#000] dark:text-white text-base lg:text-lg'>Profile Settings: Allow users to update their profile information, including name, contact details, and preferences.</li>
                    <li className='text-[#000] dark:text-white text-base lg:text-lg'>Privacy and Security: Include settings related to privacy and security, such as password management, two-factor authentication, and data sharing preferences.</li>
                    <li className='text-[#000] dark:text-white text-base lg:text-lg'>Help and Support: Provide resources for help and support, including FAQs, user guides, contact information for customer support, and links to relevant documentation or resources.</li>
                </ul>
            </div>
        </DashboardLayout>
    )
}

export default Settings