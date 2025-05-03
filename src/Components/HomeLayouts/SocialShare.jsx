import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const SocialShare = () => {
  return (
    <div>
      <h2 className="mb-5">Find Us On</h2>
      <div className="space-y-3">
        <button className="btn btn-outline w-full flex justify-start ">
          <FaFacebook size={24} />
          Facebook
        </button>
        <button className="btn btn-outline w-full flex justify-start">
          <FaTwitter size={24} />
          Twitter
        </button>
        <button className="btn btn-outline w-full flex justify-start">
          <FaInstagram size={24} />
          Instagram
        </button>
      </div>
    </div>
  );
};

export default SocialShare;
