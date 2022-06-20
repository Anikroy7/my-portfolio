import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';
import Contact from './Contact';

const ProjectDetails = ({ projectDetails }) => {
    // project data
    const details = [
        {
            id: 1,
            name: "Upbeat Anthem",
            img1: "https://i.ibb.co/VtSXjLH/anik.jpg",
            img2: "https://i.ibb.co/JKxw5Jf/banner1.jpg",
            img3: "https://i.ibb.co/D8RTbTr/banner2.jpg",
            live: "https://upbeat-anthem.web.app/",
            detail: "A music composer could sell his music services very easily.I used A Simple Navbar, Services section, and footer for making this site.I used Some technology to build this site. Such as Javascript, React, React Bootstrap, Firebase, React spring, etc.I implement Email and password-based authenticationand googled sign-in method on this website."
        }
        ,
        {
            id: 2,
            live: "https://fruity-garden.web.app/",
            img1: "https://i.ibb.co/CBCWN6D/banner1.jpg",
            img2: "https://i.ibb.co/34dDfNF/food-fruits-IZBN5-G7-AAB.jpg",
            img3: "https://i.ibb.co/CtM0tz6/JMXYT7-O7-YF.png",
            name: "Fruity Garden",
            detail: "Users could maintain his/her stock on th site. users can add to stock, users can delete stockUsers can also see his/Her orders and managethem.I used Javascript, React, React Bootstrap, Firebase, React spring, etc.for making this site. I also implemented a protected route by using the required auth.I implement Email and password-based authentication and googled sign-in method on this website."
        },
        {
            id: 3,
            name: "Handy Plus",
            img1: "https://i.ibb.co/ZRsdKCs/dbcb3f8c9fdb5d1bccb2fb0e06b37d85.jpg",
            img2: "https://i.ibb.co/S7cgD7X/download-2.jpg",
            img3: "https://i.ibb.co/Tc5Y6hB/screwdriver-33634-480.webp",
            live: "https://handy-plus-5a529.web.app/",
            detail: "I used a simple navbar, services, business summary, about us, a submit form, and a footer for the homepage.I implement the admin role and normal user role. For this, admin and normal users get different features normal users get different features normal users get different features"
        }
    ]

    const { id } = useParams()


    const query = parseInt(id)
    const cursor = query - 1;

    return (
        <div>
            <Navbar></Navbar>
            <div class="hero min-h-screen">
                <div class="hero-conten">

                    {/* carosel start */}
                    <div >
                        <div class="carousel w-full">
                            <div id="slide1" class="carousel-item relative w-full">
                                <img src={details[cursor]?.img1} class="w-full h-72" />
                                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide4" class="btn btn-circle">❮</a>
                                    <a href="#slide2" class="btn btn-circle">❯</a>
                                </div>
                            </div>
                            <div id="slide2" class="carousel-item relative w-full">
                                <img src={details[cursor]?.img2} class="w-full h-72" />
                                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide1" class="btn btn-circle">❮</a>
                                    <a href="#slide3" class="btn btn-circle">❯</a>
                                </div>
                            </div>
                            <div id="slide3" class="carousel-item relative w-full">
                                <img src={details[cursor]?.img3} class="w-full h-72" />
                                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide2" class="btn btn-circle">❮</a>
                                    <a href="#slide4" class="btn btn-circle">❯</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-8'>
                        <h1 class="text-5xl font-bold">{details[cursor]?.name}</h1>
                        <p class="py-6">{details[cursor]?.detail}</p>
                        <div className='w-full text-center mt-5'>
                            <button class="btn btn-primary px-28 font-bold"><a href={details[cursor]?.live}>Live Site</a></button>
                        </div>
                    </div>
                </div>
            </div>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default ProjectDetails;