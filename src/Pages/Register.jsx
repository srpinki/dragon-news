import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Provider/Context";

const Register = () => {
  const {createUser} = use(AuthContext);
  
    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(name, photo, email, password);
        
        createUser(email, password)
        .then((result) => {
          console.log(result);
          
        }).catch((error) => {
          console.log(error);
          
        })
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
            <input name="name" type="text" className="input" placeholder="Your name" required />

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
