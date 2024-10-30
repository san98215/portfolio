import React from 'react';
import './Skills.css';
import SkillSubsection from './SkillSubsection';

const Skills = () => {
    const ProgrammingLangues = [
        { name: "Python", icon: "devicon-python" },
        { name: "Javascript", icon: "devicon-javascript" },
        { name: "Typescript", icon: "devicon-typescript" },
        { name: "C++", icon: "devicon-cplusplus" },
        { name: "Java", icon: "devicon-java" },
    ];

    const WebDevelopment = [
        { name: "HTML", icon: "devicon-html5" },
        { name: "CSS", icon: "devicon-css3" },
        { name: "React.js", icon: "devicon-react" },
        { name: "Node.js", icon: "devicon-nodejs" },
        { name: "Express.js", icon: "devicon-express" },
        { name: "MongoDB", icon: "devicon-mongodb" },
    ];

    return (
        <section id="skills" className="skills">
            <div className="skills-wrapper">
                <div className="skills-header">
                    <div className="skills-border-left"></div>
                    <p>Skills</p>
                    <div className="skills-border-right"></div>
                </div>
                <SkillSubsection title="Programming Languages" skills={ProgrammingLangues}/>
                <SkillSubsection title="Web Development" skills={WebDevelopment}/>
            </div>
        </section>
    );
};

export default Skills;