import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div >
           <Link to={'/'} className="mr-2">Home</Link>
           <Link to={'/login'}>Login</Link>
        </div>
    );
};

export default Header;