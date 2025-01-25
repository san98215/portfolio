import React from 'react';
import './Home.css';

const Home = () => {
    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        window.scrollTo({
            top: section.offsetTop - 100,
            behavior: "smooth"
        })
    }

    function openResume() {
        window.open('/seth_nye_resume.pdf', '_blank');
    }

    return (
        <section id="home" className="home">
            <div className="home-wrapper">
                <div className="home-info">
                    <p>Welcome! My name is Seth Nye</p>
                    <div className="home-buttons">
                        <a onClick={() => openResume()} href="/#">Resume</a>
                        <a onClick={() => scrollToSection('contact')} href="/#Contact">Contact</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;