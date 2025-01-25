import React from "react";
import ProjectItem from "./ProjectItem";
import "./Projects.css";

const projects = [
    {
        title: "Deepfake Audio Detection",
        tools: [
            { name: "Python", icon: "devicon-python" },
            { name: "PyTorch", icon: "devicon-pytorch" },
            { name: "Linux", icon: "devicon-linux" },
        ],
        description: "Developed a machine learning model for detecting deepfake audio by combining graph attention networks (GATs) and convolutional layers. Extracted spectral and temporal features represented as graph-structured data and utilized GATs to improve robustness of accurate detection.",
        github: "https://github.com/san98215/ITW_AudioSpoof"
    },
    {
        title: "Protein Function Prediction",
        tools: [
            { name: "Python", icon: "devicon-python" },
            { name: "PyTorch", icon: "devicon-pytorch" },
            { name: "Bash", icon: "devicon-plain:bash" },
            { name: "Linux", icon: "devicon-linux" },
        ],
        description: "Developed a graph machine learning model for the prediction of protein functions to reduce drug discovery costs. Built data pipeline for seqeunce data from AplhaFold and used graph convolutional layers for prediction. Achieved AUROC score of 90%.",
        github: "https://github.com/san98215/GML-FinalProject-Protein-Func-Prediction"
    },
    {
        title: "FTP Server/Client",
        tools: [
            { name: "Java", icon: "logos-java" },
            { name: "Unix", icon: "devicon-unix" },
        ],
        description: "Led a team of 3 people to develop a thread-safe FTP server and client with synchronization. Implemented concurrency and ensured data integrity during critical sections by leveraging thread-safe programming. Deployed and tested the system on Unix computing clusters.",
        github: "https://github.com/san98215/FTP-Server-and-Client"
    },
    {
        title: "Knapsack Algorithms",
        tools: [
            { name: "Python", icon: "devicon-python" },
            { name: "PyTorch", icon: "devicon-pytorch" },
            { name: "Bash", icon: "devicon-plain:bash" },
            { name: "Linux", icon: "devicon-linux" },
        ],
        description: "Implemented, compared, and analyzed Branch and Bound, Greedy Approach, Hill Climbing, and Simulated Annealing algorithms to solve the NP-hard Knapsack problem. Tested on datasets containing up to 100,000 items and compared the performance of each algorithm.",
        github: "https://github.com/san98215/Knapsack-Project"
    },
    {
        title: "Cache Simulator",
        tools: [
            { name: "C++", icon: "devicon-cplusplus" },
            { name: "Bash", icon: "devicon-plain:bash" },
            { name: "Linux", icon: "devicon-linux" },
            { name: "Docker", icon: "devicon-docker" },
        ],
        description: "Developed a simulator for testing modern cache configurations used in high-performance computing architecture. Utilized a driver program with trace files and automated experimentation using a bash script reducing manual efforts for running experiments.",
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