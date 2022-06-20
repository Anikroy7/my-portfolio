import React from 'react';
import img from '../image/commig.jpg'
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';

const Blogs = () => {
    return (
        <div>
            <Navbar></Navbar>
            <img src={img} alt="" />
            <Footer></Footer>
        </div>
    );
};

export default Blogs;