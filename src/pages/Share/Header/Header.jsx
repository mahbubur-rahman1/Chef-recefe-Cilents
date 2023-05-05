import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { AuthContext } from '../../../provider/AuthProviders';
import ActiveLink from '../../ActiveLink/ActiveLink';


const Header = () => {
    const {user, logOut} = useContext(AuthContext)
    const handleLogout = () => {
        logOut()
            .then()
            .catch(error => console.log(error));
    }
    return (
        <div className=' bg-purple-400  py-3 px-2'>

            <div className="navbar bg-purple-600 rounded-2xl ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52 text-white">
                            <li><ActiveLink to='/'>Home</ActiveLink></li>
                            <li tabIndex={0}>
                                <ActiveLink to='/blogs' className="justify-between">
                                   Blogs
                                </ActiveLink>
                               
                            </li>
                            <li><ActiveLink to='/about'>About</ActiveLink></li>
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl">Chef Bazar</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-white">
                        <li><ActiveLink to='/'>Home</ActiveLink></li>
                        <li tabIndex={0}>
                            <ActiveLink to='/blogs'>
                                Blogs
                            </ActiveLink>
                            
                        </li>
                        <li><ActiveLink to='about' >About</ActiveLink></li>
                    </ul>
                </div>
                <div className="navbar-end">
                   {user? <Link onClick={handleLogout} className="btn">Logout</Link> :
                    <Link to='/login' className="btn">Login</Link>}
                </div>
            </div>
        </div>
    );
};

export default Header;