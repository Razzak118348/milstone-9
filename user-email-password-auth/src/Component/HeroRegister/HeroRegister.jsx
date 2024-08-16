import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firebase/Firebase.config";
import { useState } from "react";


const HeroRegister = () => {

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
 



  const handleRegister = (e) => {
    e.preventDefault()
    console.log('form subcomit')
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password)
    //reset
    setError('')
    setSuccess('')

    if (password.length < 6) {
      setSignUpError('Password should be at least 6 characters or longer ');
      return;
    }

   


    //creat user 
    createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        console.log(result.user)
        setSuccess('User creat successfully')
      })
      .catch(error => {
        console.log(error)
        setError(error.message)

      })


  }

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register Now </h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
            quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name='email' placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type={ passwordType ? 'test':'password'} name='password' placeholder="password" className="input input-bordered" required />
             
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
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
            success && <p className="text-green-700 font-medium ">{success}</p>
          }
        </div>
      </div>
    </div>
  );
};

export default HeroRegister;