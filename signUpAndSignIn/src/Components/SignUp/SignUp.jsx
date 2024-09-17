/**
 * 1. creatUserWithEmailandPassword
 * 2.setEmailVarification
 *
 *
 */

import React, { useState } from "react";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa";

import app from "../../firebase.config";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import auth from "../../firebase.config";
import { Link } from "react-router-dom";


const SignUp = () => {
  const [passwordType, setPasswordType] = useState(false);
  //user interface error
  const [signUpError, setSignUpError] = useState("");

  // user error
  const [error, setError] = useState("");

  //user success
  const [success, setSuccess] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, email, password);
    //interface error
    if (password.length < 6) {
      setSignUpError("Password should be at least 6 characters");
    } else if (!/^[A-Z]$/.test(password)) {
      setSignUpError("Please give a Uppercase character");
    }

    setSignUpError("");
    setError("");
    setSuccess("");

    //creat user
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);

        //update profile : jokhon forgate password dibe thokhon password update korbe : eta 2 ta parameter ney

        updateProfile(result.user,
          {
            displayName: name,
            photoURL: "https://example.com/jane-q-user/profile.jpg"
          })
          .then(() => console.log('profile update'))
          .catch(error => setError(error.message))

        //sent email verification
        sendEmailVerification(result.user)
          .then(() => alert("Please check your Email to verify"))
          .catch((error) => setError(error.message));
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col ">
        <div className="text-center mx-auto lg:w-3/4 ">
          <h1 className="text-5xl font-bold ">SignUp now!</h1>
          <p className="py-6 ">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudianda.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>

              <div className="flex  w-full">
                <input
                  type={passwordType ? "text" : "password"}
                  name="password"
                  placeholder="password"
                  className="input input-bordered w-full"
                  required
                />
                <span
                  className="w-2 mt-5 -ml-6 "
                  onClick={() => setPasswordType(!passwordType)}
                >
                  {passwordType ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                </span>
              </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">SignUp</button>
            </div>
          </form>

          {signUpError && (
            <p className="text-red-600 font-medium my-4 mx-auto">
              {signUpError}
            </p>
          )}
          {error && (
            <p className="text-red-600 font-medium my-4 mx-auto">{error}</p>
          )}
          {success && (
            <p className="text-green-600 font-bold my-4 mx-auto">{success}</p>
          )}
          <p className="mx-auto mb-5">
            Already this website go to{" "}
            <Link to={"/login"} className="text-pink-800 font-bold">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
