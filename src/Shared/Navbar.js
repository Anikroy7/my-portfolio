import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    const [color, setColor] = useState(false);

    const changeColor = () => {
        if (window.scrollY > 420) {
            setColor(true)
        }
        else {
            setColor(false);
        }
    }
    window.addEventListener('scroll', changeColor);

    console.log(color);


    return (
        <div className={color ? 'navbar bg-secondary sticky top-0 h-24 overflow-hidden' : 'navbar h-24 overflow-hidden '}>
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52">
                        <li className='hover:text-accent border-none mr-5 cursor-pointer'><Link to='/'>Home</Link></li>
                        <li className='hover:text-accent border-none mr-5 cursor-pointer'><a>Services</a></li>
                        <li className='hover:text-accent border-none mr-5 cursor-pointer'><Link to='/aboutme'>About me</Link></li>
                        <li className='hover:text-accent border-none mr-5 cursor-pointer'><a>Review</a></li>
                        <li className='hover:text-accent border-none mr-5 cursor-pointer'><Link to='/blogs'>Blogs</Link></li>

                    </ul>
                </div>
                <Link to='/' class=" normal-case text-4xl font-bold">Anik<span className='text-accent'>Roy</span></Link>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class=" menu-horizontal p-0 font-semibold">
                    <li className='hover:text-accent border-none mr-5 cursor-pointer'><Link to='/'>Home</Link></li>
                    <li className='hover:text-accent border-none mr-5 cursor-pointer'><a>Services</a></li>
                    <li className='hover:text-accent border-none mr-5 cursor-pointer'><Link to='/aboutme'>About me</Link></li>
                    <li className='hover:text-accent border-none mr-5 cursor-pointer'><a>Review</a></li>
                    <li className='hover:text-accent border-none mr-5 cursor-pointer'><Link to='/blogs'>Blogs</Link></li>

                </ul>
            </div>
            <div id='contact' class="navbar-end">
                <a href='#contact' class="p-3 px-8 bg-accent rounded-full font-bold" >Contact</a>
            </div>
        </div>
    );
};

export default Navbar;