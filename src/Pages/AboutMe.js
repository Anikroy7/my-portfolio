import React from 'react';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';
import image from '../image/my-pic.jpg'

const AboutMe = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={image} class="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 class="text-5xl font-bold">Anik <span className='text-accent'>Roy</span></h1>
                        <p class="py-6">I want to do remote job for any company. For this, i join this course. I Learn a lots of things in this course. i always want to devlop my skills. and learn somthing new.</p>
                        <p class="py-6">As a passionate Developer and long-time fan of programming. I was elated to see an opening for a Junior Web Developer role. I have experience in HTML, CSS, Bootsrap, Tailwind CSS, React, JavaScript, Node js, and Mongo Db. Combined with my recent job in front-end web development, I am confident I have the skills to help programming-hero succeed.
                        </p>
                        <p class="py-6">
                            I am constantly seeking out new technologies and stay up-to-date on trends in the industry. I saw  the most innovative websites in the world, and I would be so thrilled to join the team as a Web Developer.
                        </p>
                        <button class="btn btn-primary font-bold"><a href="https://drive.google.com/file/d/1yXmuFcymX6MxdtsMlQLOufPFgEPgENkM/view">My resume</a></button>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AboutMe;