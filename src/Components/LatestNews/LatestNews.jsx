import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex items-center bg-base-200 p-3'>
            <p className=' bg-secondary py-2 px-4 text-base-200 mr-4'>Latest</p>
            <Marquee className='mr-4 font-bold' pauseOnHover={'ture'} speed={100}><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, repudiandae.</p></Marquee>
            
        </div>
    );
};

export default LatestNews;