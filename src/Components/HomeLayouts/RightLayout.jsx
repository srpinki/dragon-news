import React from 'react';
import SocialShare from './SocialShare';
import SocialLogin from './SocialLogin';
import Qzone from './Qzone';

const RightLayout = () => {
    return (
        <div className='space-y-5'>
            <SocialLogin></SocialLogin>
            <SocialShare></SocialShare>
            <Qzone></Qzone>
        </div>
    );
};

export default RightLayout;