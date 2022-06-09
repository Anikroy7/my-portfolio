import React from 'react';

const Navbar = () => {

    return (
        <div class="navbar h-24">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52">
                        <li><a>Home</a></li>
                        <li><a>Services</a></li>
                        <li><a>About us</a></li>
                        <li><a>Review</a></li>
                        <li><a>Review</a></li>
                    </ul>
                </div>
                <a class=" normal-case text-2xl font-bold">Anik<span className='text-accent'>Roy</span></a>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0 font-semibold">
                    <li><a>Home</a></li>
                    <li><a>Services</a></li>
                    <li><a>About us</a></li>
                    <li><a>Review</a></li>
                    <li><a>Review</a></li>
                </ul>
            </div>
            <div class="navbar-end">
                <a class="p-3 px-8 bg-accent rounded-full font-bold">Contact</a>
            </div>
        </div>
    );
};

export default Navbar;