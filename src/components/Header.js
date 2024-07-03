import React, { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
    const [btnName, setBtnName] = useState('Login');
    const onlineStatus = useOnlineStatus();


    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        Online Status : {onlineStatus ? "🟢" : "🔴"}
                    </li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/">Cart</Link></li>
                    <li><Link to="/grocery">Grocery</Link></li>
                    <button className="login"
                        onClick={() => {
                            btnName === 'Login' ? setBtnName('Logout') : setBtnName('Login')
                        }}
                    >
                        {btnName}
                    </button>
                </ul>
            </div>
        </div >
    )
}

export default Header;