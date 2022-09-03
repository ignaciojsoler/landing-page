import React, { useRef, useState } from 'react';
import { ScrollPage } from 'react-scroll-motion'
import emailjs from "@emailjs/browser"
import Fade from 'react-reveal'


const ContactForm = () => {
    const form = useRef();
    const [sendSucces, setSendSucces] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const serviceID = "default_service";
        const templateID = "template_uj1zxac";
        const publicKey = "ooMstJwkwlXwHuEhu";

        emailjs.sendForm(serviceID, templateID, form.current, publicKey).then(
            function () {
                setSendSucces(true);
            },
            function (error) {
                alert("FAILED...", error);
            }
        );

    };
    return (
        <div id='contact'>
            <ScrollPage >
                {
                    sendSucces ? (
                        <Fade bottom>
                        <div className='h-screen w-screen flex justify-center items-center m-auto px-8'>
                            <div>
                                <h3 className='text-white font-neutral text-2xl text-center'>Your message has been sent correctly!</h3>
                            </div>
                        </div>
                        </Fade>
                    ) : (
                        <div className='h-screen w-screen flex justify-center items-center'>
                            <form id='form' className='flex flex-col py-10 px-12 border sm:px-32' onSubmit={handleSubmit}
                                ref={form}>
                                <h3 className=' font-neutral text-seccondary font-semibold text-xl text-center mb-5'>Contact Me</h3>
                                <input className='p-2 font-neutral mb-5' name="Name"
                                    id="Name"
                                    type="text"
                                    placeholder="Name"
                                    required />
                                <input className='p-2 font-neutral mb-5' name="Email"
                                    id="Email"
                                    type="email"
                                    placeholder="Email Address"
                                    required />
                                <textarea className='p-2 m-0 font-neutral resize-none h-24 mb-5' name="Message"
                                    id="Message"
                                    type="text"
                                    placeholder="Message"
                                    required ></textarea>
                                <button type='submit' value="send" className='border font-neutral text-white px-2 p-1 transition hover:bg-gray-200 hover:text-black'>Send</button>
                            </form>
                        </div>
                    )
                }
            </ScrollPage>
        </div>
    );
};

export default ContactForm;