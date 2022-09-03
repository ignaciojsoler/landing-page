import React from 'react';
import { Animator, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from 'react-scroll-motion'

const Regards = () => {
    return (
        <ScrollPage>
            <Animator animation={batch(FadeIn(-1), Sticky())}>
                <div className='flex flex-col space-y-8'>
                <h3 className='text-white text-5xl font-neutral text-center'>thanks for visiting!</h3>
                <a href='#home' className='block text-white font-neutral text-center animate-pulse'>Back to top</a>
                </div>
                
            </Animator>
        </ScrollPage>
    );
};

export default Regards;