import { useRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firebase/Firebase.config";
import { Link } from "react-router-dom";

const LogIn = () => {
    const [passwordType, setPasswordType] = useState(false);
    const [error, setError] = useState('')
    const [logIn, setLogIn] = useState('')

    const emailRef = useRef(null);


    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)

        setError('')
        setLogIn('')
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                setLogIn('User LogIn successfully')
            })
            .catch(error => {
                console.log(error)
                setError(error.message)
            })
    }


const handleForgetPassword=(e)=>{
    const email = emailRef.current.value;
    if(!email){
        console.log('please give an email')
        return;
    }
    else if (! /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)){
        console.log('please write a valid email')
        return;
    }
  
console.log('sent reset email',emailRef.current.value)

//send validation email
sendPasswordResetEmail(auth,email)
.then(result =>{
alert('We sent a code on your email')
})
.catch(error=>{
    console.log(error.message)
})


}

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Log In Now </h1>
                    <p className="py-6">
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
                            <input type="email" name='email'
                            ref={emailRef}
                            placeholder="email" className="input input-bordered" 
                            required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className="flex  justify-center items-center  ">
                                <input
                                    type={passwordType ? "text" : "password"}
                                    name="password"
                                    placeholder="password "
                                    className="my-2 border-2  p-1 w-full input input-bordered"
                                />
                                <span
                                    className="-ml-5"
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
                            <button className="btn btn-primary">Submit</button>
                        </div>
                    </form>

                    {
                        error && <p className="text-red-600 font-medium">{error}</p>
                    }
                    {
                        logIn && <p className="text-green-600 font-medium">{logIn}</p>
                    }
                    
                    <p className="mb-6 mx-4">New to this websile? please go to <Link className="text-orange-800" to={'/signup'}>Sign Up</Link></p>

                </div>
            </div>
        </div>
    );
};

export default LogIn;