import React from 'react';
import image from '../image/01786335131.png'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import github from '../image/github.png'
import insta from '../image/instagram.png'
import linkdin from '../image/linkedin.png'
import Typed from "react-typed"



const Banner = () => {
    const particlesInit = async (main) => {
        console.log(main);

        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };

    return (
        <div class="hero px-10 mt-10">
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{

                    fpsLimit: 150,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.2,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#fece2f",

                        },
                        links: {
                            color: "#fece2f",
                            distance: 150,
                            enable: false,
                            opacity: 0.5,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 0.5,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 200,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 1, max: 5 },
                        },
                    },
                    detectRetina: true,
                }}
            />
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div>

                    <img src={image} class="max-w-sm rounded-lg shadow-2xl ml-24" />
                </div>
                <div className='w-full'>
                    <h1 data-aos="fade-right"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out" class="text-4xl font-bold"><span className='text-accent'> <Typed
                            strings={[
                                "I'm a Full Stack Developer",
                                "I Love Software Development",
                                "I Love All My Subscribers",
                            ]}
                            typeSpeed={100}
                            backSpeed={100}
                            loop
                        /></span></h1>
                    <p data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out" class="py-6 text-justify">Hi! I am Anik Roy, a full stack web developer focused on crafting great web experiences. Coding have been my passion since the days I started working with computers but I found myself into web development since 2020. I enjoy creating beautifully designed, intuitive and functional websites.</p>
                    <button class="btn btn-primary rounded-full font-bold"><a href="https://drive.google.com/file/d/1yXmuFcymX6MxdtsMlQLOufPFgEPgENkM/view">Download Resume</a></button>
                    <button class="btn btn-secondary ml-5 rounded-full text-white font-bold">Hire me</button>

                    <div className='mt-11'>
                        <p className='ml-[-225px]'>
                            <a className='flex hover:ml-[225px] duration-1000' target='_blank' href="https://github.com/Anikroy7">
                                <span className='text-xl font-semibold text-accent mr-2'> Visit me on Github</span>
                                <img title='Visit my github profile' className='h-7 mb-4 mr-9 hover:translat' src={github} alt="" />
                            </a>
                        </p>
                        <p className='ml-[-240px]'>
                            <a className='flex hover:ml-[240px] duration-1000' title='Visit my linkedin profile' target='blank' href="https://www.linkedin.com/in/anik-roy-a14185241/">
                                <span className='text-xl font-semibold text-accent mr-2'>Visit me on Linkedin</span>
                                <span>
                                    <img className='h-7 mb-4 mr-9 hover:translat' src={linkdin} alt="" />
                                </span>
                            </a>
                        </p>

                        <div className='ml-[-262px]'>
                            <a className='flex hover:ml-[262px] duration-1000' title='Visit my linkedin profile' target='blank' href="https://www.linkedin.com/in/anik-roy-a14185241/">
                                <span className='text-xl font-semibold text-accent mr-2'>Visit me on Instragram</span>
                                <span>
                                    <img className='h-7 mb-4 mr-9 hover:translat' src={insta} alt="" />
                                </span>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;