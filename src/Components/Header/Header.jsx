import React from 'react';
import { format } from "date-fns";

const Header = () => {
    return (
        <div className='container mx-auto flex flex-col justify-center items-center my-12'>
            <img className='max-w-[350px]' src="../src/assets/logo.png" alt="" />
            <p className='my-3 text-[18px] text-accent'>Journalism Without Fear or Favour</p>
            <p className='font-semibold text-accent'>{format(new Date(), "EEEE, PP")}</p>
            
           
        </div>
    );
};

export default Header;