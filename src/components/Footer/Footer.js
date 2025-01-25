import React from "react";
import "./Footer.css";
import { Icon } from "@iconify/react";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-list">
                <Icon icon="mdi-github" className="footer-icon" />
                <Icon icon="mdi-linkedin" className="footer-icon" />
            </div>
            <p>
                © 2025 Seth Nye
            </p>
        </div>
    );
};

export default Footer;