import React from 'react';
import { Animator, ScrollPage, batch, FadeOut, MoveOut, StickyOut} from 'react-scroll-motion'
import startIcon from '../assets/starIcon.png'
import { useSpring, animated, easings } from 'react-spring'

const Hero = () => {

    const nameAnimation = useSpring({ config: { duration: 1000, easing: easings.easeOutBack }, from: { opacity: 0, x: -300 }, to: { opacity: 1, x: 0 }, delay: 300 })
    const professionAnimation = useSpring({ config: { duration: 1000, easing: easings.easeOutBack }, from: { opacity: 0, x: 300 }, to: { opacity: 1, x: 0 }, delay: 600 })

    return (
        <div id="home">
            <ScrollPage >
                <Animator animation={batch(FadeOut(1, -0.5), StickyOut(), MoveOut(0, -200))}>
                    <animated.div style={nameAnimation} className='text-white max-w-6xl m-auto'>
                        <h1 className=' font-nineties text-6xl sm:text-8xl'>
                            Hello. <br />
                            I am <span className=' text-seccondary'>Ignacio Soler</span>
                        </h1>
                    </animated.div>
                    <animated.div style={professionAnimation} className='text-white max-w-6xl m-auto'>
                        <div className='flex items-center mt-4 sm:justify-end'>
                            <img src={startIcon} alt="star image" className='h-16 w-auto mr-4 animate-spin-slow' />
                            <h4 className=' font-neutral text tracking-wide'>
                                Developer <br />
                                UX/UI Designer <br />
                                Freelance
                            </h4>
                        </div>
                    </animated.div>
                </Animator>
            </ScrollPage>
        </div>
    );
};

export default Hero;