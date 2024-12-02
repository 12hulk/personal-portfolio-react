import React, { useState } from "react";
import emailjs from "emailjs-com";  // Import EmailJS

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [formStatus, setFormStatus] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // EmailJS Send function
        emailjs
            .sendForm(
                "service_uea1bsp", // Service ID from EmailJS dashboard
                "template_xxsd04m", // Template ID from EmailJS dashboard
                e.target,           // The form element
                "fOibJkG4LA3UOG_gZ"      // User ID from EmailJS dashboard
            )
            .then(
                (result) => {
                    console.log(result.text);
                    setFormStatus("Thank you for your message. I will get back to you soon.");
                    setFormData({
                        name: "",
                        email: "",
                        message: "",
                    });
                },
                (error) => {
                    console.log(error.text);
                    setFormStatus("Oops! Something went wrong. Please try again.");
                }
            );
    };

    return (
        <div style={{ fontFamily: "'Roboto', sans-serif", backgroundColor: "#141414", color: "white", minHeight: "100vh" }}>
            <main style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>

                <section style={{ textAlign: "center", marginBottom: "50px" }}>
                    <h1 style={{ fontSize: "3rem", margin: "20px 0", color: "#00aaff" }}>Contact Me</h1>
                    <p style={{ fontSize: "1.2rem", lineHeight: "1.6", margin: "0 auto", maxWidth: "800px" }}>
                        Feel free to reach out to me with any questions, collaboration ideas, or just to say hi!
                    </p>
                </section>

                <section style={{ textAlign: "center", marginBottom: "50px" }}>
                    <h3 style={{ fontSize: "2rem", marginBottom: "20px", color: "#00aaff" }}>My Contact Information</h3>
                    <p style={{ fontSize: "1.2rem", color: "#aaa" }}>
                        <strong>Email:</strong> <a href="" style={{ color: "#00aaff" }}>dilpreetd88@gmail.com</a>
                    </p>
                    <p style={{ fontSize: "1.2rem", color: "#aaa" }}>
                        <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/dilpreet-singh-8905161ab/" style={{ color: "#00aaff" }} target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/dilpreet-singh-8905161ab/</a>
                    </p>
                    <p style={{ fontSize: "1.2rem", color: "#aaa" }}>
                        <strong>GitHub:</strong> <a href="https://github.com/12hulk" style={{ color: "#00aaff" }} target="_blank" rel="noopener noreferrer">https://github.com/12hulk</a>
                    </p>
                </section>

                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                    <div>
                        <label htmlFor="name" style={{ fontSize: "1rem", marginBottom: "5px", color: "#aaa" }}>Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            style={{ padding: "10px", fontSize: "1rem", width: "100%", borderRadius: "5px", border: "1px solid #ddd" }}
                        />
                    </div>

                    <div>
                        <label htmlFor="email" style={{ fontSize: "1rem", marginBottom: "5px", color: "#aaa" }}>Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            style={{ padding: "10px", fontSize: "1rem", width: "100%", borderRadius: "5px", border: "1px solid #ddd" }}
                        />
                    </div>

                    <div>
                        <label htmlFor="message" style={{ fontSize: "1rem", marginBottom: "5px", color: "#aaa" }}>Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows="5"
                            style={{ padding: "10px", fontSize: "1rem", width: "100%", borderRadius: "5px", border: "1px solid #ddd" }}
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        style={{
                            padding: "10px 20px",
                            backgroundColor: "#00aaff",
                            color: "#fff",
                            border: "none",
                            borderRadius: "5px",
                            fontSize: "1.2rem",
                            cursor: "pointer",
                        }}
                    >
                        Send Message
                    </button>
                </form>

                {formStatus && (
                    <p style={{ textAlign: "center", marginTop: "20px", color: "#00aaff" }}>
                        {formStatus}
                    </p>
                )}

            </main>
        </div>
    );
}

export default Contact;
