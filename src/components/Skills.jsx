import React from 'react';
import { Animator, ScrollPage, batch, Fade, MoveOut, Sticky, ZoomIn } from 'react-scroll-motion'

const Skills = () => {
    return (
        <ScrollPage>
            <Animator animation={batch(Fade(), Sticky(), ZoomIn(), MoveOut(0,-400))}>
            <div className='relative text-white font-neutral font-semibold text-7xl z-30'>
                    <h2 className=' font-nineties font-medium'>Skills</h2>
                    <h2 className='absolute opacity-10 -top-4 -left-7 font-nineties font-medium'>Skills</h2>
                </div>
            </Animator>
        </ScrollPage>
    );
};

export default Skills;