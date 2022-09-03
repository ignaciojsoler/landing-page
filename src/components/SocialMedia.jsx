import React from 'react';
import { Animator, ScrollPage, batch, Fade, MoveIn } from 'react-scroll-motion'
import {BsLinkedin, BsGithub, BsBehance} from 'react-icons/bs'


const SocialMedia = () => {
    return (
        <ScrollPage>
            <div className='relative h-screen w-screen flex flex-col justify-center items-center m-auto space-y-10 top-20'>
                <Animator animation={batch(Fade(), MoveIn(700,0))}>
                    <h3 className='text-seccondary text-4xl font-neutral font-semibold text-center'>Follow me on social media</h3>
                </Animator>
                <Animator animation={batch(Fade(), MoveIn(-700,0))}>
                    <ul className='text-white text-6xl flex space-x-10'>
                        <li><a target="_blank" 
                        href="https://www.linkedin.com/in/ignaciojsoler/" 
                        className=' inline-block transition hover:scale-125 hover:text-gray-400'><BsLinkedin/></a></li>
                        <li><a target="_blank" 
                        href="https://github.com/ignaciojsoler/" 
                        className=' inline-block transition hover:scale-125 hover:text-gray-400'><BsGithub/></a></li>
                        <li><a target="_blank" 
                        href="https://www.behance.net/64fd7af4" 
                        className=' inline-block transition hover:scale-125 hover:text-gray-400'><BsBehance/></a></li>
                    </ul>
                </Animator>
            </div>
        </ScrollPage>
    );
};

export default SocialMedia;