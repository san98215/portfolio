import React from "react";
import "./Education.css";

const Education = () => {
    return (
        <section id="education" className="education">
            <div className="education-container">
                <div className="education-header">
                    <div className="education-border-left"></div>
                    <p>Education</p>
                    <div className="education-border-right"></div>
                </div>
                <div className="education-list">
                    <div className="education-item">
                        <p>University of Georgia</p>
                    </div>
                    <div className="education-item">
                        <p>Georgia Institute of Technology</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;