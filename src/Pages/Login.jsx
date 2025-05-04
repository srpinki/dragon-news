import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Provider/Context";

const Login = () => {
  const {signInUser} = use(AuthContext);

  const handleLogin= (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password= e.target.password.value;

    signInUser(email, password)
    .then((result) => {
      console.log(result.user);
      
    }).catch((error) => {
      console.log(error);
      
    })
  }
  return (
    <div className="flex items-center justify-center bg-base-200 min-h-[calc(100vh-80px)]">
        
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ">
        
          <div className="card-body">
          <h2 className="pb-4 text-xl font-bold border-b border-base-300 text-center">Login your account</h2>
            <form onSubmit={handleLogin} className="fieldset">
              <label className="label">Email</label>
              <input name="email" type="email" className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input name="password" type="password" className="input" placeholder="Password" />
              <button className="btn btn-neutral mt-4">Login</button>
            </form>
            <p className="text-base font-semibold">Dont’t Have An Account ? <Link to={"/auth/register"} className="text-secondary font-bold">Register</Link></p>
          </div>
        </div>
    </div>
  );
};

export default Login;
