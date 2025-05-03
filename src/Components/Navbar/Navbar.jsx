import React from 'react';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center py-5 rounded-0'>
            <div></div>
            <div className='flex gap-5 text-accent'>
                <NavLink to="./">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/career">Career</NavLink>
            </div>
            <div className='flex items-center gap-2'>
                <img src="./src/assets/user.png" alt="" />
                <Link to={"/auth/login"} className='btn btn-primary px-10'>Login</Link>
            </div>
        </div>
    );
};

export default Navbar;