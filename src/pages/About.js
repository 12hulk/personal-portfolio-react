import React from "react";

function About() {
    return (
        <div style={{ fontFamily: "'Roboto', sans-serif", backgroundColor: "#141414", color: "white", minHeight: "100vh" }}>

            <main style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>

                {/* About Me Section */}
                <section style={{ textAlign: "center", marginBottom: "50px" }}>
                    <h1 style={{ fontSize: "3rem", margin: "20px 0", color: "#00aaff" }}>About Me</h1>
                    <p style={{ fontSize: "1.2rem", lineHeight: "1.6", margin: "0 auto", maxWidth: "800px" }}>
                        I’m Dilpreet Singh, a web developer with a strong foundation in both front-end and back-end technologies.
                        I specialize in building scalable, responsive web applications using tools like React, Node.js, Express, and PostgreSQL.
                        I focus on clean, maintainable code and user-centric solutions, always learning and evolving to solve real-world problems.
                    </p>
                </section>

                {/* Skills Section */}
                <section style={{ textAlign: "center", margin: "50px 0" }}>
                    <h3 style={{ fontSize: "1.8rem", marginBottom: "20px", color: "#00aaff" }}>My Skills</h3>
                    <ul style={{ listStyle: "none", paddingLeft: "0", textAlign: "center" }}>
                        <li style={{ fontSize: "1.1rem", marginBottom: "10px" }}>C++</li>
                        <li style={{ fontSize: "1.1rem", marginBottom: "10px" }}>HTML & CSS</li>
                        <li style={{ fontSize: "1.1rem", marginBottom: "10px" }}>JavaScript (ES6+)</li>
                        <li style={{ fontSize: "1.1rem", marginBottom: "10px" }}>React.js</li>
                        <li style={{ fontSize: "1.1rem", marginBottom: "10px" }}>Node.js</li>
                        <li style={{ fontSize: "1.1rem", marginBottom: "10px" }}>Express.js</li>
                        <li style={{ fontSize: "1.1rem", marginBottom: "10px" }}>PostgreSQL</li>
                        <li style={{ fontSize: "1.1rem", marginBottom: "10px" }}>Git & GitHub</li>
                        <li style={{ fontSize: "1.1rem", marginBottom: "10px" }}>RESTful API development</li>
                        <li style={{ fontSize: "1.1rem", marginBottom: "10px" }}>Supabase</li>
                        <li style={{ fontSize: "1.1rem", marginBottom: "10px" }}>Vercel</li>
                    </ul>
                </section>

                {/* Academic Background */}
                <section style={{ marginBottom: "50px" }}>
                    <h2 style={{ fontSize: "2rem", color: "#00aaff", marginBottom: "20px" }}>Academic Background</h2>

                    <ul style={{ listStyle: "none", paddingLeft: "0", textAlign: "center" }}>
                        <li style={{ fontSize: "1.1rem", marginBottom: "10px" }}>BSc in Computer Science, University of Regina (3rd Year)</li>
                        <li style={{ fontSize: "1.1rem", marginBottom: "10px" }}>Key Subjects: Data Structures, Algorithms, Web Development,Databasess</li>
                    </ul>
                </section>

                {/* Goals Section */}
                <section style={{ marginBottom: "50px" }}>
                    <h2 style={{ fontSize: "2rem", color: "#00aaff", marginBottom: "20px" }}>Goals</h2>
                    <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "20px" }}>
                        I aim to continuously grow as a developer, staying ahead of industry trends and working on projects that have a real-world impact. I'm passionate about creating efficient, scalable solutions.
                    </p>
                </section>
            </main>
        </div>
    );
}

export default About;
