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
                        A web application for the school project designed to help students track their assignments, deadlines, and progress. Built using HTML, CSS, JavaScript, PHP, and AJAX, this project emphasizes efficient task management and user-friendly interface.
                    </p>
                    <p style={{ fontSize: "1rem", marginBottom: "15px", color: "#aaa" }}>
                        <strong>Technologies Used:</strong> HTML, CSS, JavaScript, PHP, AJAX
                    </p>
                </section>

                {/* File Sharing Website */}
                <section style={{ marginBottom: "50px" }}>
                    <h2 style={{ fontSize: "2rem", marginBottom: "20px", color: "#00aaff" }}>File Sharing Website</h2>
                    <p style={{ fontSize: "1.2rem", marginBottom: "15px" }}>
                        A file-sharing platform where users can upload, share, and manage their files. Developed with React, Node.js, PostgreSQL, and front-end deployed on vercel whereas backend on Fly.io with supabase Storage.
                    </p>
                    <p style={{ fontSize: "1rem", marginBottom: "15px", color: "#aaa" }}>
                        <strong>Technologies Used:</strong> React, Node.js, PostgreSQL, supabase,vercel, Fly.io
                    </p>
                    <a href="https://file-sharing-website-five.vercel.app/" style={{ color: "#00aaff", textDecoration: "none" }}>View Project</a>
                </section>
                <section style={{ marginBottom: "50px" }}>
                    <h2 style={{ fontSize: "2rem", marginBottom: "20px", color: "#00aaff" }}>AI Quote Machine</h2>
                    <p style={{ fontSize: "1.2rem", marginBottom: "15px" }}>
                        A website to generate random quotes based on the user's mood.It involves integration of gemini api.
                    </p>
                    <p style={{ fontSize: "1rem", marginBottom: "15px", color: "#aaa" }}>
                        <strong>Technologies Used:</strong> React, Node.js, vercel, gemini api,bootstrap
                    </p>
                    <a href="https://ai-quote-machine.vercel.app/" style={{ color: "#00aaff", textDecoration: "none" }}>View Project</a>
                </section>

            </main>
        </div>
    );
}

export default Projects;
