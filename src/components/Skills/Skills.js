import React from 'react';
import './Skills.css';
import SkillSubsection from './SkillSubsection';

const Skills = () => {
    const ProgrammingLangues = [
        { name: "Python", icon: "devicon-python" },
        { name: "Javascript", icon: "devicon-javascript" },
        { name: "Typescript", icon: "devicon-typescript" },
        { name: "C++", icon: "devicon-cplusplus" },
        { name: "Java", icon: "logos-java" },
    ];

    const WebDevelopment = [
        { name: "HTML", icon: "devicon-html5" },
        { name: "CSS", icon: "devicon-css3" },
        { name: "React.js", icon: "devicon-react" },
        { name: "Node.js", icon: "logos-nodejs-icon" },
        { name: "Express.js", icon: "devicon-express" },
        { name: "MongoDB", icon: "devicon-mongodb" },
    ];

    const MachineLearning = [
        { name: "PyTorch", icon: "devicon-pytorch" },
        { name: "ScikitLearn", icon: "devicon-scikitlearn" },
        { name: "Numpy", icon: "devicon-numpy" },
        { name: "Pandas", icon: "devicon-pandas" },
        { name: "Matplotlib", icon: "devicon-matplotlib" },
    ];

    return (
        <section id="skills" className="skills">
            <div className="skills-container">
                <div className="skills-header">
                    <div className="skills-border-left"></div>
                    <p>Skills</p>
                    <div className="skills-border-right"></div>
                </div>
                <SkillSubsection title="Programming Languages" skills={ProgrammingLangues}/>
                <SkillSubsection title="Web Development" skills={WebDevelopment}/>
                <SkillSubsection title="Machine Learning" skills={MachineLearning}/>
            </div>
        </section>
    );
};

export default Skills;