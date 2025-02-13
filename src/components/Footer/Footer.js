import React from "react";
import "./Footer.css";
import { Icon } from "@iconify/react";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-list">
                <a href="https://github.com/san98215">
                    <Icon icon="mdi-github" className="footer-icon" />
                </a>
                <a href="https://www.linkedin.com/in/s-nye">
                    <Icon icon="mdi-linkedin" className="footer-icon" />
                </a>
            </div>
            <p>
                © 2025 Seth Nye
            </p>
        </div>
    );
};

export default Footer;