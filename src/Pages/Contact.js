import React from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
    // const sendEmail = event => {
    //     event.preventDefault()
    //     emailjs.sendForm('service_tzpjudx', 'template_rvn1t3i', event.target,)
    // }
    return (
        <div className='p-9 bg-primary mt-9'>
            <form action="https://formspree.io/f/mrgjdkqq"
                method="POST" className='text-center'>
                <h3 className='text-3xl font-bold text-center '>Your Information</h3>
                <input name='name' type="text" placeholder="Your Name" class="input mt-5 mb-2 w-full max-w-xs" /><br />
                <input name='email' type="email" placeholder="Your Email" class="input mt-5 mb-2 w-full max-w-xs" /><br />
                <input type="number" placeholder="Your phone" class="input mt-5 mb-2 w-full max-w-xs" /><br />
                <textarea name='message' class="textarea textarea-bordered h-24 w-80" placeholder="Your message"></textarea><br />
                <input type="submit" value='send' className='mt-5 btn btn-secondary px-12' />
            </form>

        </div>
    );
};

export default Contact;