import React from 'react'

import { Header, HomeFooter, BackToTop } from '../Components/Index'

const HomeLayout = ({ children }) => {
    return (
        <div className='layout'>
            <header className='flex justify-center w-full'>
                <Header />
            </header>
            <main className="main-container">
                {children}
            </main>
            <footer>
                <HomeFooter />
                <BackToTop />
            </footer>
        </div>
    )
}

export default HomeLayout