import React from "react";
import "./ProjectItem.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { Icon } from "@iconify/react";

const ProjectItem = ({ project }) => {
    return (
        <div className="project-item">
            <div className="project-item-container">
                <h2>{project.title}</h2>
                <p>Description</p>
                <div className="project-item-tools">
                    {project.tools.map((tool, idx) => (
                        <OverlayTrigger
                            key={idx}
                            placement="top"
                            overlay={
                                <Tooltip id="tooltip-top">
                                    <strong>{tool.name}</strong></Tooltip>
                            }>
                            <Icon icon={tool.icon} className="project-icon" />
                        </OverlayTrigger>
                    ))}
                </div>

                <p>More Info</p>
            </div>
        </div>
    );
};


export default ProjectItem;