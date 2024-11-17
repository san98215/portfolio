import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <section id="home" className="home">
            <div className="home-wrapper">
                <div className="home-info">
                    <p>Welcome! My name is Seth Nye</p>
                    <div className="home-buttons">
                        <a>Resume</a>
                        <a>Contact</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;