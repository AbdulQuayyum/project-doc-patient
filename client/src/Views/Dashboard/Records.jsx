import React from 'react'

import { DashboardLayout } from '../../Layout/Dashboard.Layout'

const Records = () => {
    return (
        <DashboardLayout>
            <div className='flex flex-col'>
                <span className='text-4xl lg:text-5xl md:text-start text-center py-6 font-extrabold text-[#000] dark:text-white'>Records</span>
                <ul className='flex flex-col gap-y-2'>
                    <li className='text-[#000] dark:text-white text-base lg:text-lg'>Medical History: Provide a comprehensive view of the patient's medical history, including past diagnoses, treatments, medications, lab results, and imaging studies.</li>
                    <li className='text-[#000] dark:text-white text-base lg:text-lg'>Consultation Notes: Allow doctors to document consultation notes, treatment plans, and other relevant information for each patient encounter.</li>
                    <li className='text-[#000] dark:text-white text-base lg:text-lg'>Record Search and Filter: Implement search and filter functionalities to help users quickly find specific records or information within the system.</li>
                    <li className='text-[#000] dark:text-white text-base lg:text-lg'>Document Upload: Provide a feature for users to upload and attach additional documents or files to patient records, such as medical reports or referral letters.</li>
                </ul>
            </div>
        </DashboardLayout>
    )
}

export default Records