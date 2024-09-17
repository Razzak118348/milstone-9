import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import auth from "../../Firebase/Firebase.config";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [signUpError, setSignUpError] = useState("");
  const [success, setSuccess] = useState("");
  const [passwordType, setPasswordType] = useState(false);
  //   const [checkboxError, setCheckboxError] = useState(false);


  const handleSignUp = (e) => {
    e.preventDefault();
    // console.log("form subcomit");
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const checkbox = e.target.checkbox.checked;
    console.log(name, email, password, checkbox);

    // user inteface error

    if (password.length < 6) {
      setSignUpError("Password should be at least 6 characters or longer ");
      return;
    } else if (!/[A-z]/.test(password)) {
      setSignUpError("You should give one Uppercase characters ");
      return; // must give return
    } else if (!checkbox) {
      setSignUpError("Please checked the box !!");
      return;
    }

    //reset error message
    setSignUpError("");
    //reset success message
    setSuccess("");
    //creat user
    createUserWithEmailAndPassword(auth, email, password)
       .then((result) => {
        console.log(result.user);

        if (result.user.emailVerified) {
          setSuccess("User creat successfully");
        } else {
          setSuccess("Please verified your email");
          alert("Please verified your email");
        }

        //update profile
        updateProfile(result.user,
           {
          displayName: name,
          photoURL: "https://example.com/jane-q-user/profile.jpg",
        })
          .then(() => {
            console.log("profile Updated");
          })
          .catch((error) => {
            console.log(error.message);
          });

        // sent varification email
        sendEmailVerification(result.user)
          .then(() => {
            alert("Please chack your Email to verify");
          })
          .catch((error) => {
            console.log(error.message);
          });
      })
      .catch((error) => {
        console.log(error);

        setSignUpError(error.message);
      });
  };

  return (
    <div className="text-center mt-10">
      <h3 className="text-3xl font-bold"> Please sign up </h3>
      <br />
      <form onSubmit={handleSignUp}>
        <input
          type="text"
          name="name"
          placeholder="name"
          required
          className="my-2 border-2 border-primary px-2 py-1 w-64"
        />
        <br />
        <input
          type="email"
          name="email"
          placeholder="email"
          required
          className="my-2 border-2 border-primary px-2 py-1 w-64"
        />
        <br />

        <div className="flex  justify-center items-center  ">
          <input
            type={passwordType ? "text" : "password"}
            name="password"
            placeholder="password "
            className="my-2 border-2 border-primary p-1 w-64"
          />
          <span
            className="-ml-5"
            onClick={() => setPasswordType(!passwordType)}
          >
            {passwordType ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
          </span>
        </div>

        <input className="my-6" type="checkbox" name="checkbox" id="" />
        <label htmlFor="checkbox">
          {" "}
          <a className="" href="/condition">
            Accept our terms and condition
          </a>{" "}
        </label>
        <br />
        <button className="btn bg-pink-500 font-bold w-64"> Sign Up</button>
      </form>
      {signUpError && <p className="text-red-600 font-medium">{signUpError}</p>}
      {success && <p className="text-green-700 font-medium ">{success}</p>}
      <p className="mb-6 m-4">
        Already this websile ?please go to{" "}
        <Link className="text-orange-800" to={"/login"}>
          Log In
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
