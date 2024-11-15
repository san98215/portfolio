import React from "react";
import "./About.css";
import EducationCard from "./EducationCard";

const About = () => {
    const education = [
        { 
            className: "education-card-uga", university: "University of Georgia", 
            graduation: "2018-2022", degree: "B.S. Computer Science", gpa: "3.97",
            img: "uga.png"
        },
        { 
            className: "education-card-gt", university: "Georgia Institute of Technology", 
            graduation: "2023-2024", degree: "M.S. Computational Science and Engineering", gpa: "3.85",
            img: "gt.png"
        },
    ];

    return (
        <section id="about" className="about">
            <div className="about-container">
                <div className="about-header">
                    <div className="about-border-left"></div>
                    <p>About</p>
                    <div className="about-border-right"></div>
                </div>
                    <div className="about-info">
                        <div className="about-intro">
                            <h2>My Story</h2>
                            <p>
                                My name is Seth Nye from Marietta, Georgia. I am currently a graduate student at the Georgia Instute of Technology 
                                pursuing a degree in Computational Science and Engineering. My studies have focused on machine learning and high-performance computing.
                                Before attending my Master's program, I completed a Bachelor's degree in Computer Science at the University of Georgia.
                            </p>
                            <p>
                                My career journey began in healthcare as a pre-medicine student and EMT, where I developed a strong foundation in patient care and 
                                critical thinking. Since then, I have had the opportunity to work on a variety of projects across both healthcare and technology, 
                                each offering unique challenges and opportunities for growth. I am driven by continuous learning and the problem-solving skills essential 
                                to both fields.
                            </p>
                            <p>
                                My primary interests are in the areas of distributed computing, high-performance computing, and machine learning.
                                However, I enjoy all kinds of programming and am eager to become involved in anything that will help me grow!
                            </p>
                        </div>
                        <div className="about-education">
                            <EducationCard education={education[0]}/>
                            <EducationCard education={education[1]}/>
                        </div>
                </div>
                
            </div>
        </section>
    );
};

export default About;