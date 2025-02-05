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
            graduation: "2023-2024", degree: "M.S. Computational Science and Engineering", gpa: "3.90",
            img: "gt.png"
        },
    ];

    return (
        <section id="about" className="about-container">
            <div className="about-header">
                <div className="about-border-left"></div>
                <p>About</p>
                <div className="about-border-right"></div>
            </div>
            <div className="about-content">
                <div className="about-intro">
                    <h2>About me</h2>
                    <p>
                        My name is Seth Nye, a M.S. Computational Science and Engineering graduate from the Georgia Instute of Technology.
                        My studies have focused on machine learning and high-performance computing, building on a Computer Science degree from the University of Georgia.
                    </p>
                    <p>
                        I began my academic journey pursuing a career in healthcare as a pre-med student and EMT, where I developed strong critical thinking and problem-solving skills. Over time, my passion 
                        for continuous learning and problem-solving led me to explore challenges in both healthcare and technology. Eventually, I decided that I wanted to fully pursue a career in the field of technology
                        leading me to pivot from my Biochemistry degree to a Computer Science degree.
                    </p>
                    <p>
                        My primary interests are in the areas of full-stack development, distributed computing, high-performance computing, and machine learning,
                        but I enjoy all types of programming and welcome opportunities to grow!
                    </p>
                </div>
                <div className="about-education">
                    <EducationCard education={education[0]} />
                    <EducationCard education={education[1]} />
                </div>
            </div>

        </section>
    );
};

export default About;