import React, { useState } from 'react';
import { useSpring, animated, easings } from 'react-spring'
import { Squash as Hamburger } from 'hamburger-react'

const Navbar = () => {
    const [isOpen, setOpen] = useState(false)
    const navbarAnimation = useSpring({ config: { duration: 1200, easing: easings.easeOutSine }, from: { opacity: 0, x: 300 }, to: { opacity: 1, x: 0 }, delay: 1000 })
    return (
        <nav>
            <div className='bg-gradient-to-b from-black to-transparent w-full h-20 fixed z-30'></div>
            <aside className={`fixed h-screen w-3/4 z-50 bg-black transition duration-200 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <ul className='text-white font-neutral text-2xl px-10 py-32 space-y-10'>
                    <li><a href="#home" className='hover:text-gray-400 transition'>Home</a></li>
                    <li><a href="#about" className='hover:text-gray-400 transition'>About</a></li>
                    <li ><a href="#skills" className='hover:text-gray-400 transition py-4' >Skills</a> </li>
                    <li ><a href="#works" className='hover:text-gray-400 transition py-4' >Works</a></li>
                    <li ><a href="#contact" className='hover:text-gray-400 transition py-4' >Contact</a></li>
                </ul>
            </aside>
            <div className={`fixed h-screen w-screen top-0 left-0 bg-black z-40 backdrop-blur-sm transition duration-200 ${isOpen ? 'bg-opacity-50' : 'opacity-0 hidden'}`}></div>

            <animated.div style={navbarAnimation} className='w-full py-10 fixed z-40 sm:px-16'>
                <div className='justify-between hidden sm:flex max-w-screen-xl m-auto'>
                    <a href="#home" className='text-white font-neutral font-semibold block hover:text-gray-400 transition'>Ignacio Soler</a>
                    <ul className=' flex justify-between items-center text-white font-neutral font-semibold text-sm space-x-10'>
                        <li><a href="#home" className='hover:text-gray-400 transition'>Home</a></li>
                        <li><a href="#about" className='hover:text-gray-400 transition'>About</a></li>
                        <li ><a href="#skills" className='hover:text-gray-400 transition py-4' >Skills</a> </li>
                        <li ><a href="#works" className='hover:text-gray-400 transition py-4' >Works</a></li>
                        <li ><a href="#contact" className='hover:text-gray-400 transition py-4' >Contact</a></li>
                    </ul>
                </div>
                <div className='flex justify-end px-8 sm:hidden w-full'>
                    <Hamburger toggled={isOpen} toggle={setOpen} size={30} color="#fff" direction="right" />
                </div>
            </animated.div>

        </nav>
    );
};

export default Navbar;