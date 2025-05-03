import React from "react";
import { Link } from "react-router";

const Register = () => {
    const handleRegister = (e) => {
        e.preventDefault();
    }
  return (
    <div className="flex items-center justify-center bg-base-200 min-h-[calc(100vh-80px)]">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ">
        <div className="card-body">
          <h2 className="pb-4 text-xl font-bold border-b border-base-300 text-center">
            Register your account
          </h2>
          <form onSubmit={handleRegister} className="fieldset">
            <label className="label">Name</label>
            <input name="name" type="text" className="input" placeholder="Your name" />

            <label className="label">Photo Url</label>
            <input name="photo" type="text" className="input" placeholder="Photo url" />

            <label className="label">Email</label>
            <input name="email" type="email" className="input" placeholder="Email" />

            <label className="label">Password</label>
            <input name="password" type="password" className="input" placeholder="Password" />

            <label className="label mt-4">
                <input type="checkbox" className="checkbox" />
                Accept Term & Conditions
            </label>
      
            <button className="btn btn-neutral mt-4">Register</button>
          </form>
          <p className="text-base font-semibold">
            Already Have An Account ?{" "}
            <Link to={"/auth/login"} className="text-secondary font-bold">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
