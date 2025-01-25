import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
    const formRef = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm("service_xuptcfc", "template_7t7at6h", formRef.current, {
            publicKey: "xMpfkg8b3DpuivosN"
        })
            .then(() => {
                formRef.current.reset();
            }, (error) => {
                console.log(error.text);
            });
    };

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
                    <form className="contact-form" ref={formRef} onSubmit={sendEmail}>
                        <input type="text" name="name" placeholder="Name" />
                        <input type="email" name="email" placeholder="Email" />
                        <textarea name="message" placeholder="Message" />
                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;