import React from 'react';
import { Animator, ScrollPage, batch, FadeIn, FadeOut, Move } from 'react-scroll-motion'
import html from '../assets/logos/html.svg'
import adobexd from '../assets/logos/adobexd.svg'
import bootstrap from '../assets/logos/bootstrap.svg'
import css from '../assets/logos/css.svg'
import express from '../assets/logos/express.svg'
import figma from '../assets/logos/figma.svg'
import illustrator from '../assets/logos/illustrator.svg'
import javascript from '../assets/logos/javascript.svg'
import mongo from '../assets/logos/mongo.svg'
import mysql from '../assets/logos/mysql.svg'
import nodejs from '../assets/logos/nodejs.svg'
import photoshop from '../assets/logos/photoshop.svg'
import react from '../assets/logos/react.svg'
import redux from '../assets/logos/redux.svg'
import tailwind from '../assets/logos/tailwind.svg'
import typescript from '../assets/logos/typescript.svg'

const SkillsIcons = () => {
    const skills = [html, css, bootstrap, tailwind, javascript, typescript, react, redux, nodejs, express, mongo, mysql, figma, adobexd, photoshop, illustrator]

    return (
        <div id="skills">
        <ScrollPage>
            <Animator animation={batch(FadeIn(), FadeOut(1, -1.5), Move())}>
                <div id="skills" className='relative mx-8 min-h-screen flex items-center justify-center -top-10'>
                    <div className='grid grid-cols-4 gap-10 gap-x-8 md:gap-x-16'>
                        {
                            skills.map((skill, idx) => {
                                return <img key={idx} src={skill} className="h-20 transition hover:scale-125" />
                            })
                        }
                    </div>
                </div>
            </Animator>
        </ScrollPage>
        </div>
    );
};

export default SkillsIcons;