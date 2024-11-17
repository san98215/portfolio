import React from "react";
import ProjectItem from "./ProjectItem";
import "./Projects.css";

const projects = [
    {
        title: "Project 1",
        tools: [
            { name: "Python", icon: "devicon-python" },
            { name: "Javascript", icon: "devicon-javascript" },
            { name: "Typescript", icon: "devicon-typescript" },
            { name: "C++", icon: "devicon-cplusplus" },
            { name: "Java", icon: "devicon-java" },
        ],
    },
    {
        title: "Project 2",
        tools: ["Tool 1", "Tool 2", "Tool 3"],
    },
    {
        title: "Project 3",
        tools: ["Tool 1", "Tool 2", "Tool 3"],
    },
    {
        title: "Project 2",
        tools: ["Tool 1", "Tool 2", "Tool 3"],
    },
    {
        title: "Project 3",
        tools: ["Tool 1", "Tool 2", "Tool 3"],
    },
]

const Projects = () => {
    return (
        <section id="projects" className="projects">
            <div className="projects-container">
                <div className="projects-header">
                    <div className="projects-border-left"></div>
                    <p>Projects</p>
                    <div className="projects-border-right"></div>
                </div>
                <div className="projects-list">
                    {projects.map((project, idx) => (
                        <ProjectItem key={idx} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;