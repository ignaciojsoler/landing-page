import React from 'react';
import { Animator, ScrollPage, batch, Fade, MoveOut, Sticky, ZoomIn } from 'react-scroll-motion'

const Contact = () => {
    return (
        <ScrollPage>
            <Animator animation={batch(Fade(), Sticky(), ZoomIn(), MoveOut(0,-600))}>
                <div className='relative text-white font-neutral font-semibold text-7xl'>
                    <h2 className=' font-nineties font-medium'>Contact</h2>
                    <h2 className='absolute opacity-10 -top-4 -left-7 font-nineties font-medium'>Contact</h2>
                </div>
            </Animator>
        </ScrollPage>
    );
};

export default Contact;