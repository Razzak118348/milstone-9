import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../Firebase/firebase.config";


export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ child }) => {
  const [user, setUser] = useState(null);
  const [loading,setLoading] = useState(true)


  const creatUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };
  
  const signInUser = (email, password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password);
  }
  
  const signInWithGoogle = ()=>{
    return signInWithPopup(auth,googleProvider);
  }
  
  const logOut =()=>{
    setLoading(true)
    return signOut(auth);
  }
  
  useEffect(()=>{
  const unSubscrive =  onAuthStateChanged(auth,(currentUser)=>{
    setUser(currentUser)
    console.log('observing current user in useeffect',currentUser)
    setLoading(false)
    });
  
    return ()=>{
      unSubscrive()
    }
  
  },[])

  const authInfo = { user ,creatUser,signInUser,logOut,loading,signInWithGoogle
  };
  
  return <AuthContext.Provider value={authInfo}>{child}</AuthContext.Provider>;
};

export default AuthProvider;
AuthProvider.propTypes = {
  child: PropTypes.node,
};
/**
 *
 * 1.creat context and export it ,...
 * 2.set provider with value ....
 * 3.use the Auth Provider in the main.jsx file
 * 4.access children in the AuthProvider component as       children and use it as prop
 *
 */
