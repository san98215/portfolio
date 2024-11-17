import React from "react";
import "./Contact.css";

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <div className="contact-header">
                <div className="contact-border-left"></div>
                <p>Contact</p>
                <div className="contact-border-right"></div>
            </div>
            <div className="contact-content">
                <h1>Contact Me</h1>
                <div className="form-container">
                    <form className="contact-form">
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <textarea placeholder="Message" />
                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;