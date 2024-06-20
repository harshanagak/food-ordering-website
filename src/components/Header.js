import React, { useState } from "react";
const Header = () => {
    const [btnName, setBtnName] = useState('Login');

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
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