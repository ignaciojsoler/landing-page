import React from 'react';
import { Animator, ScrollPage, batch, FadeIn, FadeOut, Move } from 'react-scroll-motion'
import image from '../assets/descriptionImg.webp'
import resume from '../assets/Resume-Ignacio-Soler.pdf'

const Description = () => {
    return (
        <div id="about">
        <ScrollPage>
            <Animator animation={batch(FadeIn(), FadeOut(1, -1.5), Move())}>
                <section className='relative h-screen w-auto text-white flex items-center max-w-screen-xl m-auto -top-10'>
                    <div className='flex flex-col space-y-4 px-8 lg:grid lg:grid-cols-2 lg:gap-4 lg:px-16 lg:space-y-0'>
                        <div className='group transition overflow-hidden hover:scale-95'>
                        <img src={image} alt="greek statue" className='w-full h-auto object-cover transition group-hover:scale-125' />
                        </div>
                    <div className='relative space-y-6 md:text-xl'>
                        <p className=' font-semibold font-neutral tracking-wider'>I'm a <span className='text-seccondary'>Web Developer, UX/UI Designer, Animator & Digital Artist</span> based in Argentina. <br />
                            I'm a person passionate about learning new
                            technologies and tools. <span className='text-seccondary'>My goal</span> is to be part of projects where I can
                            improve my skills while contributing my
                            knowledge. <br />
                        </p>
                        <a href={resume} download className='block text-center relative font-semibold font-neutral transition duration-150  border p-4 hover:bg-white hover:text-black w-full'>DOWNLOAD MY RESUME</a>
                    </div>
                    </div>
                </section>
            </Animator>
        </ScrollPage>
        </div>
    );
};

export default Description;