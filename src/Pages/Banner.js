import React from 'react';
import image from '../image/my-pic.jpg'

const Banner = () => {
    return (
        <div class="hero">
            <div class="hero-content flex-col lg:flex-row-reverse">
                {/* <div className='flex'>
                    <img src="https://api.lorem.space/image/movie?w=260&h=400" class="max-w-sm rounded-lg shadow-2xl" />
                    <q className='pl-28 w-full'>
                        practice makes a man perfect
                    </q>
                

                </div> */}
                <img src={image} class="max-w-sm rounded-lg shadow-2xl ml-24" />
                <div className='w-full'>
                    <h1 class="text-5xl font-bold">Hi, I'm <span className='text-primary'> Anik Roy</span></h1>
                    <p class="py-6 text-justify">Hi! I am Anik Roy, a full stack web developer focused on crafting great web experiences. Coding have been my passion since the days I started working with computers but I found myself into web development since 2020. I enjoy creating beautifully designed, intuitive and functional websites.</p>
                    <button class="btn btn-primary rounded-full font-bold">Download Resume</button>
                    <button class="btn btn-secondary ml-5 rounded-full text-white font-bold">Read more ...</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;