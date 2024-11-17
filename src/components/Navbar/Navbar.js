import React, { useState, useRef } from 'react';
import { Link } from 'react-scroll';

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
                        <Link to="home" duration={700}>
                            <a className={active === 'home' ? 'active' : ''} onClick={handleActive} href="#">Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link to="about" duration={700} offset={-70}>
                            <a className={active === 'about' ? 'active' : ''} onClick={handleActive} href="#About">About</a>
                        </Link>
                    </li>
                    <li>
                        <Link to="skills" duration={700} offset={-90}>
                            <a className={active === 'skills' ? 'active' : ''} onClick={handleActive} href="#">Skills</a>
                        </Link>
                    </li>
                    <li>
                        <Link to="projects" duration={700} offset={-90}>
                            <a className={active === 'projects' ? 'active' : ''} onClick={handleActive} href="#">Projects</a>
                        </Link>
                    </li>
                    <li>
                        <Link to="contact" duration={700} offset={-90}>
                            <a className={active === 'contact' ? 'active' : ''} onClick={handleActive} href="#">Contact</a>
                        </Link>
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