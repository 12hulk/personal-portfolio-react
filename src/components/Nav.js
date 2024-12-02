import React from "react";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav style={{
            backgroundColor: "#141414",
            padding: "10px 20px",
            position: "sticky",
            top: "0",
            zIndex: "1000",
        }}>
            <ul style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                listStyle: "none",
                margin: "0",
                padding: "0",
            }}>
                <li style={{ margin: "0 15px" }}>
                    <Link to="/About" style={{
                        textDecoration: "none",
                        color: "white",
                        fontWeight: "bold",
                        fontSize: "1.1rem",
                    }}>
                        About
                    </Link>
                </li>
                <li style={{ margin: "0 15px" }}>
                    <Link to="/Projects" style={{
                        textDecoration: "none",
                        color: "white",
                        fontWeight: "bold",
                        fontSize: "1.1rem",
                    }}>
                        Projects
                    </Link>
                </li>
                <li style={{ margin: "0 15px" }}>
                    <Link to="/Contact" style={{
                        textDecoration: "none",
                        color: "white",
                        fontWeight: "bold",
                        fontSize: "1.1rem",
                    }}>
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
