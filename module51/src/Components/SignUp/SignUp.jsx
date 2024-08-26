
import { Link } from "react-router-dom";
import  { AuthContext } from "../../Context/AuthProvider";
import { useContext } from "react";
 


const SignUp = () => {
  
 const {creatUser} = useContext(AuthContext)
//  console.log(authInfo)

    const handleSignUp = e =>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password)

//creat user in firebase
    creatUser(email,password,name)
    .then(res=>{console.log(res.user)})
    .catch(error=>{console.log(error.message)})

    }

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col w-full">
        <div className="text-center ">
          <h1 className="text-2xl md:text-5xl font-bold">SignUp now!</h1>
          
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
         
          <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
            <label className="label">
                <span className="label-text">Name</span>
              </label>
            <input
                type="text"
                placeholder="name"
                name="name"
                className="input input-bordered"
              
              />

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
              
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">SignUp</button>
            </div>
          </form>

          <p className="mx-5 mb-5">Already have an account? please {' '} <Link className="text-pink-600 font-bold" to={'/login'}>LogIn</Link></p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
