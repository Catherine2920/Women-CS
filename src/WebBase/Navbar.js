import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assests/Logo.png';
import './Navbar.css'; 

const NavBar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="logoImg">
                    <img src={logo} alt="Profile" className="nav-img" />
                </li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/events">Events</Link></li>
                <li><a href="#services">Contact</a></li>
                <li><a href="#contact">Sponsors</a></li>
                <div className='profile/login'></div>
            </ul>
            <button className='Signin'>Sign In</button>
        </nav>
    );
};

export default NavBar;
