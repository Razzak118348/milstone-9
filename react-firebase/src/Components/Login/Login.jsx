import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  GithubAuthProvider,
} from "firebase/auth";
import app from "../../firebase/firebase.init";
import { useState } from "react";

const Login = () => {
  const [user, setUser] = useState(null);

  const auth = getAuth(app);
  const googleprovider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();

  const handleGoogleSignIN = () => {
    signInWithPopup(auth, googleprovider)
      .then((result) => {
        const loggedInUser = result.user;
        setUser(loggedInUser);
        console.log(loggedInUser);
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };
  const handleSignOut = () => {
    signOut(auth)
      .then((result) => {
        console.log(result);
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleGithubSignin = () => {
    signInWithPopup(auth, gitHubProvider)
      .then((result) => {
        const loggedInUser = result.user;
        setUser(loggedInUser);
        console.log(loggedInUser);
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };

  return (
    <div>
      {/* user ? logout : sign in */}
      {user ? (
        <button onClick={() => handleSignOut()}>Sign out</button>
      ) : (
        <div>
          {" "}
          <button onClick={() => handleGoogleSignIN()}>Google Login</button>
          <button onClick={handleGithubSignin}>Github login</button>
        </div>
      )}
      {user && (
        <div>
          <h3>user: {user.displayName}</h3>
          <p>Email : {user.email}</p>
          <img src={user.photoURL} alt="user image" />
        </div>
      )}
    </div>
  );
};

export default Login;
