import React, { useState, useCallback } from 'react'
import { animated, useSpring } from 'react-spring'

const LoadingPage = () => {

    const width = window.screen.width

    const leftToRight = useSpring({
        config: { duration: 15000 },
        from: { x: -width},
        to: { x: 0 },
        loop: true
    })
    const rightToLeft = useSpring({
        config: { duration: 15000 },
        from: { x: 0 },
        to: { x: -width },
        loop: true
    })

    const opacityAnimation = useSpring({
        config: {duration: 500},
        from: {opacity:0},
        to: {opacity:1}
    })

    return (
        <animated.div style={opacityAnimation}>
            <div className='fixed h-full w-full z-50 space-y-4 flex flex-col justify-center items-center overflow-hidden bg-black'>
                <div className='absolute w-full h-full bg-noise opacity-8'></div>
                <animated.h3 style={leftToRight} className='block font-nineties text-6xl w-full whitespace-nowrap text-white'>LOADING LOADING LOADING LOADING LOADING LOADING LOADING LOADING LOADING LOADING LOADING LOADING LOADING</animated.h3>
                <animated.h3 style={rightToLeft} className='block font-nineties text-6xl w-full whitespace-nowrap text-white'>LOADING LOADING LOADING LOADING LOADING LOADING LOADING LOADING LOADING LOADING LOADING LOADING LOADING</animated.h3>
                <animated.h3 style={leftToRight} className='block font-nineties text-6xl w-full whitespace-nowrap text-white'>LOADING LOADING LOADING LOADING LOADING LOADING LOADING LOADING LOADING LOADING LOADING LOADING LOADING</animated.h3>
                <animated.h3 style={rightToLeft} className='block font-nineties text-6xl w-full whitespace-nowrap text-white'>LOADING LOADING LOADING LOADING LOADING LOADING LOADING LOADING LOADING LOADING LOADING LOADING LOADING</animated.h3>
                <animated.h3 style={leftToRight} className='block font-nineties text-6xl w-full whitespace-nowrap text-white'>LOADING LOADING LOADING LOADING LOADING LOADING LOADING LOADING LOADING LOADING LOADING LOADING LOADING</animated.h3>
                <animated.h3 style={rightToLeft} className='block font-nineties text-6xl w-full whitespace-nowrap text-white'>LOADING LOADING LOADING LOADING LOADING LOADING LOADING LOADING LOADING LOADING LOADING LOADING LOADING</animated.h3>
                <animated.h3 style={leftToRight} className='block font-nineties text-6xl w-full whitespace-nowrap text-white'>LOADING LOADING LOADING LOADING LOADING LOADING LOADING LOADING LOADING LOADING LOADING LOADING LOADING</animated.h3>
                <animated.h3 style={rightToLeft} className='block font-nineties text-6xl w-full whitespace-nowrap text-white'>LOADING LOADING LOADING LOADING LOADING LOADING LOADING LOADING LOADING LOADING LOADING LOADING LOADING</animated.h3>
                <animated.h3 style={leftToRight} className='block font-nineties text-6xl w-full whitespace-nowrap text-white'>LOADING LOADING LOADING LOADING LOADING LOADING LOADING LOADING LOADING LOADING LOADING LOADING LOADING</animated.h3>
                <animated.h3 style={rightToLeft} className='block font-nineties text-6xl w-full whitespace-nowrap text-white'>LOADING LOADING LOADING LOADING LOADING LOADING LOADING LOADING LOADING LOADING LOADING LOADING LOADING</animated.h3>
            </div>
        </animated.div>
    );
};

export default LoadingPage;