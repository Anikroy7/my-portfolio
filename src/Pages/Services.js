import React from 'react';
import './Services.css'
import heart from '../image/heartemoji.png'
import purple from '../image/thumbup.png'
import humble from '../image/humble.png'
import Card from './Card';

const Services = () => {
    return (
        <div className='services px-8'>

            <div className='awesome'>
                <span className='text-4xl font-bold'>My Awesome</span><br />
                <span className='text-4xl font-bold text-primary'>Services</span>
                <p className='mt-5'> I have just started my career, I don’t have practical achievements.  <br /> I really want to practically explore and experience my potential by <br /> delivering the best services to the company.</p><br />
                <button className='mt-5'>
                    <a href='#contact' class="p-3 px-8 bg-accent rounded-full font-bold" >Hire me</a>
                </button>
            </div>
            <div className='relative'>
                <div className='absolute' style={{ left: '14rem' }}>
                    <Card
                        emoji={heart}
                        heading={'Developer'}
                        detail={'HTML, Css, Javascript, React, Node'}
                    ></Card>
                </div>
                <div className='absolute' style={{ top: '12rem', left: '-4rem' }}>
                    <Card
                        emoji={humble}
                        heading={'Design'}
                        detail={'Figma, Photoshop, Adobe'}
                    ></Card>
                </div>
                <div className='absolute' style={{ top: '19rem', left: '12rem' }}>
                    <Card
                        emoji={heart}
                        heading={'Ux/Ui'}
                        detail={'different experiences which have allowed me to understand'}
                    ></Card>
                </div>
                <div className=' relative left-96 top-[-120px]'>
                    <img className='h-20' src={purple} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Services;