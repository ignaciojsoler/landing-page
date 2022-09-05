import React from 'react'
import spinner from '../assets/circles.svg'

const LoadingPage = () => {

    return (
        <div className='fixed h-full w-full z-50 space-y-8 flex flex-col justify-center items-center overflow-hidden bg-black'>
            <div className='absolute w-full h-full bg-noise opacity-8'></div>
            <img src={spinner} className=" animate-pulse"/>
            <h3 className='text-white font-nineties text-5xl  animate-pulse'>Loading</h3>
        </div>
    );
};

export default LoadingPage;