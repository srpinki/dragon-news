import React from 'react';
import Header from '../Components/Header/Header';
import { Outlet } from 'react-router';
import LatestNews from '../Components/LatestNews/LatestNews';
import Navbar from '../Components/Navbar/Navbar';
import LeftLayout from '../Components/HomeLayouts/LeftLayout';
import RightLayout from '../Components/HomeLayouts/rightLayout';

const HomeLayout = () => {
    return (
        <div>
            <header>
            <Header></Header>
            <section className='w-11/12 mx-auto'>
                <LatestNews></LatestNews>
            </section>
            </header>
            <nav className='w-11/12 mx-auto'>
                <Navbar></Navbar>
            </nav>

            <main className='w-11/12 mx-auto grid grid-cols-12 gap-5'>
                <div className="left-sidebar col-span-3 sticky top-0 h-fit">
                    <LeftLayout></LeftLayout>
                </div>
                <div className='col-span-6'><Outlet></Outlet></div>
                <div className="right-sidebar col-span-3 sticky top-0 h-fit">
                    <RightLayout></RightLayout>
                </div>
            </main>
            
        </div>
    );
};

export default HomeLayout;