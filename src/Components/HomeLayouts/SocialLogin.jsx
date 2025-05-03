import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  return (
    <div>
        <h2 className="font-bold mb-5">Login with</h2>
        <div className="space-y-3">
            <button className="btn btn-outline w-full btn-secondary">
            <FcGoogle size={24}/>Login with Google
            </button>
            <button className="btn btn-outline w-full btn-primary">
            <FaGithub size={24}/>Login with Github
            </button>
        </div>
    </div>
  );
};

export default SocialLogin;
