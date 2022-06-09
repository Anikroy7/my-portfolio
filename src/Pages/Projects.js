import React from 'react';

const Projects = () => {
    return (
        <div class="hero bg-primary p-16 mt-9">
            <div class="hero-conten flex flex-col lg:flex-row">
                <div className=' mr-32'>
                    <h1 class="text-5xl font-bold"><h3> My |</h3> <h3 className='mt-3'>Projects</h3></h1>
                    <p className='text-justify mt-5'>I feel great about this project, because we have the chance to work as a team, help each other and divide the work that it will be fair for the others. Plus everybody was working hard to finish this project we even get to the point that every day I get headaches just to think how we would present this poster or presentation Maria for example was frustrated with what her grade would be if we do this wrong but at the end we did it an everything went better than I expected.
                        My strengths where that I knew how to talk to people and be able to have a conversation with them, and exchange connection, and be able to show them what diabetes is all about and being able to talk loud enough so people can hear me, and understand what I was talking about and explaining myself. But my weakness were that I was doing the posternot time and talk to my team about what is right or wrong about the project. Trying to finish on time and translated to Spanish the whole poster it was a hard job but done it good.</p>
                </div>
                <section>
                    <div class="grid w-96 grid-cols-1 divide-y-[2px] divide-black text-center">
                        <section>
                            <div className='hidden'>2</div>
                            <div className='flex'>
                                <div className='text-xl font-bold mr-10 mt-3'>01/</div>
                                <div>
                                    <h3 className='text-center text-2xl font-bold mt-3 mb-3'>Upbeat Anthmem </h3>
                                    <p className=' text-cyan-900 font-semibold text-justify'>This website is developed for a Music composer.</p>
                                    <div className='w-full mt-5 text-justify'>
                                        <div>
                                            <button className='btn btn-xs text-white btn-secondary ml-4'><a href="https://upbeat-anthem.web.app/">Live Site</a></button>
                                            <button className='btn btn-xs text-white btn-secondary ml-4'><a href="https://github.com/Anikroy7/upbeat-antehem">Github client</a></button>
                                        </div>
                                        <div className='mt-5'>

                                            <button className='btn btn-xs text-white btn-secondary ml-4'>View Details</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </section>
                        <section className='mt-5'>
                            <div className='hidden'>3</div>
                            <div className='flex'>
                                <div className='text-xl font-bold mr-10 mt-3'>02/</div>
                                <div>
                                    <h3 className='text-center text-2xl font-bold mt-3 mb-3'>Fruity Garden</h3>
                                    <p className=' text-cyan-900 font-semibold text-justify'>This Website is based on warehouse management inventories.</p>
                                    <div className='w-full mt-5 text-justify'>
                                        <div>
                                            <button className='btn btn-xs text-white btn-secondary ml-4'><a href="https://fruity-garden.web.app/">Live Site</a></button>
                                            <button className='btn btn-xs text-white btn-secondary ml-4'><a href="https://github.com/Anikroy7/fruity-garden-client">Github Client</a></button>
                                        </div>
                                        <div className='mt-5'>
                                            <button className='btn btn-xs text-white btn-secondary ml-4'><a href="https://github.com/Anikroy7/fruity-garden-server">Github Server</a></button>
                                            <button className='btn btn-xs text-white btn-secondary ml-4'>View Details</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </section>
                        <section className='mt-5'>
                            <div className='hidden'>1</div>
                            <div className='flex'>
                                <div className='text-xl font-bold mr-10 mt-3'>03/</div>
                                <div>
                                    <h3 className='text-center text-2xl font-bold mt-3 mb-3'>Handy Plus</h3>
                                    <p className=' text-cyan-900 font-semibold text-justify'>This website is developed for a Manufacturer company.</p>
                                    <div className='w-full mt-5 text-justify'>
                                        <div>
                                            <button className='btn btn-xs text-white btn-secondary ml-4'><a href="https://handy-plus-5a529.web.app/">Live Site</a></button>
                                            <button className='btn btn-xs text-white btn-secondary ml-4'><a href="https://github.com/Anikroy7/handy-plus-client">Github Client</a></button>
                                        </div>
                                        <div className='mt-5'>
                                            <button className='btn btn-xs text-white btn-secondary ml-4'><a href="https://github.com/Anikroy7/handy-plus-server">Github Server</a></button>
                                            <button className='btn btn-xs text-white btn-secondary ml-4'>View Details</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </section>
                    </div>

                </section>
            </div>
        </div>
    );
};

export default Projects;