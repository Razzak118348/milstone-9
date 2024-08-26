import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const Login = () => {

  const {signInUser, signInWithGoogle}=useContext(AuthContext)
  const navigate= useNavigate()

    const handleLogin = e =>{

        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password)


        signInUser(email,password)
        .then(result=>{
          console.log(result.user);
          e.target.reset();
          navigate('/')
        })
        .catch(error =>{
          console.log(error.message);
        })

    }

    const handleGoogleSignIn = ()=>{
      signInWithGoogle()
      .then(retust=>console.log(result.user))
      .catch(error=>console.log(error.message))
    }

  return (
    <div className="hero bg-base-200 min-h-screen ">
      <div className="hero-content flex-col w-full ">
        <div className="text-center ">
          <h1 className="text-2xl md:text-5xl font-bold my-8">LogIn now!</h1>
          
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
           

              <label className="label">
                <span className="label-text">Email</span>
              </label>
             
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>

          <p className="mx-5 mb-5">New to this site ? please {' '} <Link className="text-pink-600 font-bold" to={'/signup'}>SignUp</Link></p>
          <p>
            <button onClick={handleGoogleSignIn} className="btn btn-ghost"> Google</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
