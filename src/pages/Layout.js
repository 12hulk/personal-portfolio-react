import React from "react";
import { Outlet } from "react-router-dom";
import { Dropdown } from "react-bootstrap";  // Import Dropdown component from React Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";  // Import Bootstrap CSS
import Nav from "../components/Nav";
function Layout() {
    return (
        <div style={{ fontFamily: "'Roboto', sans-serif", backgroundColor: "#141414", color: "white", minHeight: "100vh" }}>

            <Nav />
            <main style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
                <section style={{ textAlign: "center" }}>
                    <img
                        src={require("../assets/profileImage.jpg")}
                        alt="Dilpreet Singh"
                        style={{
                            borderRadius: "50%",
                            border: "3px solid #00aaff",
                            width: "200px",
                            height: "200px",
                            objectFit: "cover",
                        }}
                    />
                </section>
                <section style={{ textAlign: "center", marginBottom: "50px" }}>
                    <h1 style={{ fontSize: "3rem", margin: "20px 0" }}>Hello, I'm Dilpreet Singh</h1>
                    <h2 style={{ fontSize: "1.5rem", color: "#00aaff", marginBottom: "20px" }}>Web Developer | Full Stack | Enthusiast</h2>
                    <p style={{ fontSize: "1.2rem", lineHeight: "1.6", margin: "0 auto", maxWidth: "800px" }}>
                        Welcome to my personal portfolio website. I'm a passionate web developer with expertise in both front-end and back-end technologies.
                        With a deep understanding of HTML, CSS, JavaScript, and frameworks like React, Node.js, and Express, I am dedicated to building scalable and efficient web applications.
                    </p>
                </section>


                {/* Skills Dropdown */}
                <section style={{ textAlign: "center", margin: "50px 0" }}>
                    <h3 style={{ fontSize: "1.8rem", marginBottom: "20px", color: "#00aaff" }}>My Skills</h3>
                    <Dropdown>
                        <Dropdown.Toggle variant="primary" id="dropdown-custom-components" style={{ backgroundColor: "#00aaff", border: "none" }}>
                            click me to see
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#">C++</Dropdown.Item>
                            <Dropdown.Item href="#">HTML & CSS</Dropdown.Item>
                            <Dropdown.Item href="#">JavaScript</Dropdown.Item>
                            <Dropdown.Item href="#">React</Dropdown.Item>
                            <Dropdown.Item href="#">Node.js</Dropdown.Item>
                            <Dropdown.Item href="#">Express</Dropdown.Item>
                            <Dropdown.Item href="#">Php</Dropdown.Item>
                            <Dropdown.Item href="#">SQL & PostgreSQL</Dropdown.Item>
                            <Dropdown.Item href="#">Git & GitHub</Dropdown.Item>
                            <Dropdown.Item href="#">RESTful APIs</Dropdown.Item>
                            <Dropdown.Item href="#">Supabase</Dropdown.Item>
                            <Dropdown.Item href="#">Vercel</Dropdown.Item>

                        </Dropdown.Menu>
                    </Dropdown>
                </section>

                <Outlet />
            </main>

        </div>
    );
}

export default Layout;
