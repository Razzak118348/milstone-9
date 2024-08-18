import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useRef, useState } from 'react';
import auth from '../../firebase.config';
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa";


const Login = () => {
    const [logInError,setLogInError]= useState('')
    const [success, setSuccess] = useState("");
    const [passwordType, setPasswordType] = useState(false);

const emailRef = useRef(null)

const handleLogin =(e)=>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
console.log(email, password)


//to erase before status
setLogInError('')


// creat signIn 
signInWithEmailAndPassword(auth,email,password)
.then(result=>{
    console.log(result)
    if (result.user.emailVerified) {
        setSuccess("User creat successfully");
      } else {
        logInError("Please verified your email");
        
      }

})
.catch(error=>{
    console.log(error.message)
    setLogInError(error.message)
})
}

const handleForgetPassword =()=>{
    const email = emailRef.current.value;
    console.log('reset password',emailRef.current.value)

    if(!email){
        console.log('no have email')
        return;
    }
    //regular expresion for valid email on chat gpt
    else if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)){
        console.log('please write a valid email')
        return;
    }
    
    // forget password dile email send korbe new password dewar jonno 

    // send validation email 
    sendPasswordResetEmail(auth,email)
    .then(()=>alert('An email send on your email account'))
    .catch((error=>setLogInError(error.message)))
}


    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col ">
          <div className="text-center mx-auto lg:w-3/4">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6 ">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email'    ref={emailRef} placeholder="email" className="input input-bordered" required />
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
                <label className="label">
                  <a onClick={handleForgetPassword} href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>

            {
                logInError && <p className="text-red-600 font-medium my-4 mx-auto">{logInError}</p>
            }
            {success && (
            <p className="text-green-600 font-bold my-4 mx-auto">{success}</p>
          )}
<p className="mx-auto mb-5">New to this website please  { ' '}<Link  to={'/signup'} className="text-pink-800 font-bold">SignUp</Link></p>

          </div>


        </div>
      </div>
    );
};

export default Login;