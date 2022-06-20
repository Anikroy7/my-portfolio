import React from 'react';

const Card = ({ emoji, heading, detail }) => {
    return (
        <div style={{ backgroundColor: 'rgba(246, 247, 240, 0.8)', borderRadius: '20px', padding: '0px 26px 2rem 26px' }} className='w-48 bg- slate - 50 drop-shadow-2xl h-60 border-primary border-4 flex flex-col items-center justify-center text-center'>
            < img className='w-16 mt-6' src={emoji} alt="" />
            <h4 className='font-bold text-xl mb-5'>{heading}</h4>
            <p className='text-sm'>{detail}</p>
            <button className='pb-4 mt-4 text-secondary font-semibold'>Learn more</button>
        </div >
    );
};

export default Card;