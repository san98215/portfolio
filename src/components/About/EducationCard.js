import React from "react";
import "./EducationCard.css";

const EducationCard = ( { education }) => {
    return (
        <div className={education.className}>
            <div className="education-card-img">
                <img src={education.img} alt="Temp" ></img> 
            </div>

            <div className="education-card-body">
                <div className="education-card-header">
                    <h2>{education.university}</h2>
                    <p>{education.graduation}</p>
                </div>
                <div className="education-card-info">
                    <p>{education.degree}</p>
                    <p>GPA: {education.gpa}</p>
                </div>
            </div>
        </div>
    );
};

export default EducationCard;
