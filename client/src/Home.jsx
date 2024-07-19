import React from 'react'

const Home = () => {
    return (
        <div className="relative h-screen w-full flex justify-center items-center bg-neutral-900">
            <div className="absolute inset-0 bg-fuchsia-400 bg-opacity-20 blur-[100px] pointer-events-none"></div>
            <h2 className='text-2xl font-bold text-white'>Welcome to my personal Website</h2>
        </div>
    )
}

export default Home
