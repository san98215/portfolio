import React from "react";
import "./SkillSubsection.css";
import { Icon } from "@iconify/react";

const SkillSubsection = (props) => {
    return (
        <div className="skill-subsection">
            <p>{props.title}</p>
            <div className="skill-list">
                {props.skills.map((skill, idx) => (
                    <div key={idx} className="skill-item">
                        <Icon icon={skill.icon} className="skill-icon" />
                        <p>{skill.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SkillSubsection;