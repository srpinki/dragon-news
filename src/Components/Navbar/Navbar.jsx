import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../Provider/Context';
import loginIcon from '../../assets/user.png'
const Navbar = () => {
    const {user} = use(AuthContext)
    return (
        <div className='flex justify-between items-center py-5 rounded-0'>
            <div>{user && user.email}</div>
            <div className='flex gap-5 text-accent'>
                <NavLink to="./">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/career">Career</NavLink>
            </div>
            <div className='flex items-center gap-2'>
                {
                    user ? <button className='btn btn-primary px-10'>LogOut</button> : <><img src={loginIcon} alt="" />
                    <Link to={"/auth/login"} className='btn btn-primary px-10'>Login</Link></>
                }
                
            </div>
        </div>
    );
};

export default Navbar;