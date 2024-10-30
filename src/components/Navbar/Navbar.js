import React, { useState } from 'react';
import './Navbar.css';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Navbar = () => {
    const [active, setActive] = useState('home');

    const handleActive = (e) => {
        setActive(e.target.textContent.toLowerCase());
    }

    return (
        <section className="navbar">
            <div className="nav-wrapper">
                <ul className="nav-items">
                    <li>
                        <a className={active === 'home' ? 'active' : ''} onClick={handleActive} href="#">Home</a>
                    </li>
                    <li>
                        <a className={active === 'about' ? 'active' : ''} onClick={handleActive} href="#">About</a>
                    </li>
                    <li>
                        <a className={active === 'skills' ? 'active' : ''} onClick={handleActive} href="#">Skills</a>
                    </li>
                    <li>
                        <a className={active === 'projects' ? 'active' : ''} onClick={handleActive} href="#">Projects</a>
                    </li>
                    <li>
                        <a className={active === 'contact' ? 'active' : ''} onClick={handleActive} href="#">Contact</a>
                    </li>
                </ul>
                <div className="socials">
                    <a href="https://github.com/san98215">
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/s-nye">
                        <FaLinkedin />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Navbar;