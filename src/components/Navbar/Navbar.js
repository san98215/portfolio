import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Icon } from "@iconify/react";
import './Navbar.css';

const Navbar = () => {
    const [active, setActive] = useState('home');
    const [isScrolling, setIsScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (isScrolling) return;

            const sections = document.querySelectorAll('section');
            let current = '';

            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const scrollPosition = window.scrollY;

                if (scrollPosition >= sectionTop - 200 && scrollPosition < sectionTop + sectionHeight) {
                    current = section.getAttribute('id');
                }
            });

            setActive(current);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [isScrolling]);

    const handleClick = (section) => {
        setIsScrolling(true);
        setActive(section);

        setTimeout(() => {
            setIsScrolling(false);
        }, 700);
    };

    return (
        <section className="navbar">
            <div className="nav-wrapper">
                <ul className="nav-items">
                    <li>
                        <Link to="home" duration={700}>
                            <a className={active === 'home' ? 'active' : ''} onClick={() => handleClick('home')} href="#">Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link to="about" duration={700} offset={-70}>
                            <a className={active === 'about' ? 'active' : ''} onClick={() => handleClick('about')} href="#About">About</a>
                        </Link>
                    </li>
                    <li>
                        <Link to="skills" duration={700} offset={-90}>
                            <a className={active === 'skills' ? 'active' : ''} onClick={() => handleClick('skills')} href="#">Skills</a>
                        </Link>
                    </li>
                    <li>
                        <Link to="projects" duration={700} offset={-90}>
                            <a className={active === 'projects' ? 'active' : ''} onClick={() => handleClick('projects')} href="#">Projects</a>
                        </Link>
                    </li>
                    <li>
                        <Link to="contact" duration={700} offset={-90}>
                            <a className={active === 'contact' ? 'active' : ''} onClick={() => handleClick('contact')} href="#">Contact</a>
                        </Link>
                    </li>
                </ul>
                <div className="socials">
                    <a href="https://github.com/san98215">
                        <Icon className="social-icon" icon="mdi-github" />
                    </a>
                    <a href="https://www.linkedin.com/in/s-nye">
                        <Icon className="social-icon" icon="mdi-linkedin" />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Navbar;