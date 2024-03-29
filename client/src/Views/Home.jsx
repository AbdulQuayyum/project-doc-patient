import React from 'react'

import { About, Hero } from '../Components/Index'
import HomeLayout from '../Layout/Home.Layout'
import DocumentTitle from '../Utilities/Utilities'

const Home = () => {
    DocumentTitle("No Name Yet || A Medical Platform") 
    return (
        <HomeLayout>
            <div className='flex flex-col justify-center mt-32 md:mt-20'>
                <Hero />
                <About />
            </div>
        </HomeLayout>
    )
}

export default Home