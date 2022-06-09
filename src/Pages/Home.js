import React from 'react';
import Navbar from '../Shared/Navbar';
import Banner from './Banner';
import Projects from './Projects';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Projects></Projects>
        </div>
    );
};

export default Home;