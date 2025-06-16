import React from 'react'
import './contact.css'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import { useRef, useState } from 'react'
import { BsCheck2Circle } from 'react-icons/bs'
import emailjs from '@emailjs/browser';



const Contact: React.FC = () => {

    console.log(import.meta.env.VITE_YOUR_SERVICE_ID)

    const [showSend, setShowSend] = useState('dontSendMessage')

    const form = useRef<HTMLFormElement>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setShowSend('sendMessage')

        if (form.current !== null) {
            emailjs.sendForm(import.meta.env.VITE_YOUR_SERVICE_ID, import.meta.env.VITE_YOUR_TEMPLATE_ID, form.current, import.meta.env.VITE_YOUR_PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        }

    };

    return (
        <>
            <Navbar/>
            <div className='Contact'>
                <div className='inner_contact_form'>
                    <div className='inner_contact'>
                        <div className='contact_header'>
                            <h5>CONTACT US</h5>
                            <br/>
                            <p>
                                Want to get in touch or join us to expand
                                our team? Please fill out the form or contact
                                us through any of the options below to start
                                your journey with us. We cannot wait to hear
                                back from you!
                            </p>
                            <br/>
                            <div className='contact_container'>
                                <a href="mailto: illinirobosub@outlook.com">email</a>
                                <a target="_blank" href="https://www.instagram.com/illini_robosub/">Instagram</a>
                                <a target="_blank" href="https://www.youtube.com/channel/UCH1yMqlcyWFXMLoPdFAdIrg">YouTube</a>
                                <a target="_blank" href="https://twitter.com/illini_robosub">Twitter</a>
                                <a target="_blank" href="https://www.linkedin.com/company/illini-robosub">Linkedin</a>
                            </div>
                        </div>
                    </div>
                    <div className='inner_form'>
                        <form ref={form} onSubmit={ handleSubmit }>
                            <div className='Full_Name'>
                                <input className='first_name' name='first_name' type='text' placeholder='Enter First Name'/>
                                <input className='last_name' name='last_name' type='text' placeholder='Enter Last Name'/>
                            </div>
                            <div className='Email_Subject'>
                                <input className='email' name='email' type='email' placeholder='Enter Email'/>
                                <input className='subject' name='subject' type='text' placeholder='Enter Subject'/>
                            </div>
                            <div className='Content'>
                                <textarea id='content' name='message' placeholder='Enter Message'/>
                            </div>
                            <button className='send'>Submit </button><br/>
                            <p className={showSend}>
                                Message Sent <BsCheck2Circle style={{ transform: "translateY(2px)" }}/>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Contact;