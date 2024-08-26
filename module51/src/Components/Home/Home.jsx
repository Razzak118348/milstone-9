import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const Home = () => {
    const authinfo =  useContext(AuthContext);
   

    return (
        <>
        <h2 className="text-red-700 text-3xl">hi this is home : </h2>
        </>
    );
};

export default Home;