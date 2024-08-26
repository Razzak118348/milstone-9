import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivetRout = ({children}) => {
    const {user,loading}= useContext(AuthContext)
    if(loading){
        return <span className="loading loading-dots loading-lg ml-20"></span>
    }
    else if(user){
        return children;
    }
    return  <Navigate to='/login'></Navigate>
};

export default PrivetRout;