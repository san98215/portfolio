import React from "react";
import "./Contact.css";

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <h1>Contact Me</h1>
            <div className="form-container">
                <form className="contact-form">
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <textarea placeholder="Message" />
                    <button type="submit">Send</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;