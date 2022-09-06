import React from 'react';
import { Animator, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from 'react-scroll-motion'
import data from '../../projects-data.json'
import githubLogo from '../../assets/logos/github.svg'
import onlineLogo from '../../assets/logos/online.svg'

const TodoApp = () => {

    const project = data[2]
    let widthScreen = screen.width / 1.7

    return (
        <div>
            <ScrollPage>
                <Animator animation={batch(Sticky(), Fade(), MoveIn(widthScreen, 0), MoveOut(-widthScreen, 0))}>
                <div className='space-y-4 invisible sm:visible'>
                        <h2 className='text-white font-neutral font-semibold text-center text-2xl'>{project.title}</h2>
                        <div className='relative group transition hover:scale-105'>
                            <div className='absolute bg-black px-6 space-y-10 w-full h-full opacity-0 bg-opacity-0 transition  flex flex-col items-center justify-center group-hover:bg-opacity-70 group-hover:opacity-100'>
                                <p className='text-white text-center font-neutral font-semibold text-xl'>To-do App developed with React, React-router and Tailwind</p>
                                <div className='flex  space-x-6'>
                                <a href={project.deploy} target="_blank">
                                        <img src={onlineLogo} alt="deploy link" className='h-12 transition hover:scale-125' />
                                    </a>
                                    <a href={project.repository} target="_blank">
                                        <img src={githubLogo} alt="github link" className='h-12 transition hover:scale-125' />
                                    </a>
                                </div>
                            </div>
                            <img src={project.img} alt="ecommerce project" />
                        </div>

                    </div>

                </Animator>
                <Animator animation={batch(Fade(), MoveOut(-500,0))}>
                    <div className='space-y-4 sm:hidden px-8 h-screen w-screen flex items-center'>
                        <div>

                        
                        <h2 className='text-white font-neutral font-semibold text-center text-2xl'>{project.title}</h2>
                        <div className='relative transition space-y-4'>
                            <img src={project.img} alt="ecommerce project" />
                            <p className='text-white text-center font-neutral font-semibold'>Responsive e-commerce developed with React, Redux, Firebase and Tailwind</p>
                            <div className='flex justify-center space-x-6'>
                                <a href={project.deploy} target="_blank">
                                    <img src={onlineLogo} alt="deploy link" className='h-12 transition' />
                                </a>
                                <a href={project.repository} target="_blank">
                                    <img src={githubLogo} alt="github link" className='h-12 transition' />
                                </a>
                            </div>
                        </div>
                        </div>
                    </div>
                </Animator>
            </ScrollPage>
        </div>
    );
};

export default TodoApp;