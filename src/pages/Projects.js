import React from "react";

function Projects() {
    return (
        <div style={{ fontFamily: "'Roboto', sans-serif", backgroundColor: "#141414", color: "white", minHeight: "100vh" }}>

            <main style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>

                {/* Projects Header Section */}
                <section style={{ textAlign: "center", marginBottom: "50px" }}>
                    <h1 style={{ fontSize: "3rem", margin: "20px 0", color: "#00aaff" }}>My Projects</h1>
                    <p style={{ fontSize: "1.2rem", lineHeight: "1.6", margin: "0 auto", maxWidth: "800px" }}>
                        Below are some of the key projects I've worked on, showcasing my skills in web development and problem-solving.
                    </p>
                </section>

                {/* Assignment Tracker Project */}
                <section style={{ marginBottom: "50px" }}>
                    <h2 style={{ fontSize: "2rem", marginBottom: "20px", color: "#00aaff" }}>Assignment Tracker</h2>
                    <p style={{ fontSize: "1.2rem", marginBottom: "15px" }}>
                        Collaborated in a team to build a web app enabling students to track and manage assignments.
                        Integrated a local database for storing assignment data securely.
                    </p>
                    <p style={{ fontSize: "1rem", marginBottom: "15px", color: "#aaa" }}>
                        <strong>Technologies Used:</strong>  HTML, CSS, JS (frontend), PHP & AJAX (backend)
                    </p>
                </section>

                {/* File Sharing Website */}
                <section style={{ marginBottom: "50px" }}>
                    <h2 style={{ fontSize: "2rem", marginBottom: "20px", color: "#00aaff" }}>File Sharing Website</h2>
                    <p style={{ fontSize: "1.2rem", marginBottom: "15px" }}>
                        Developed a secure hosting platform allowing users to create temporary profiles, upload files, and access them across devices.
                        Optimized user experience for seamless file sharing without the need for external storage devices.
                        Equipped with download and Delete features.
                        Result: Enabled efficient and secure file sharing for users.
                    </p>
                    <p style={{ fontSize: "1rem", marginBottom: "15px", color: "#aaa" }}>
                        <strong>Technologies Used:</strong> React (frontend), Node.js (backend), Supabase (database), Vercel (hosting)
                    </p>
                    <a href="https://file-sharing-website-five.vercel.app/" style={{ color: "#00aaff", textDecoration: "none" }}>View Project</a>
                </section>
                <section style={{ marginBottom: "50px" }}>
                    <h2 style={{ fontSize: "2rem", marginBottom: "20px", color: "#00aaff" }}>AI Quote Machine</h2>
                    <p style={{ fontSize: "1.2rem", marginBottom: "15px" }}>
                        Created an interactive app to generate mood-based quotes using the Gemini API.
                        More like a fun app.
                        Integrated dynamic animations for a polished user experience.
                    </p>
                    <p style={{ fontSize: "1rem", marginBottom: "15px", color: "#aaa" }}>
                        <strong>Technologies Used:</strong> React (with Framer Motion), Gemini API, Vercel (hosting),bootstrap
                    </p>
                    <a href="https://ai-quote-machine.vercel.app/" style={{ color: "#00aaff", textDecoration: "none" }}>View Project</a>
                </section>

            </main>
        </div>
    );
}

export default Projects;
