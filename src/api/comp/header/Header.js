import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideoSlash } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import React from "react";

const Header = () => {
    return (
        <React.Fragment>
            <style>{`
                .custom-link,
                .navbar-brand,
                .nav-link {
                    color: #ffffff; /* Set the desired color for unvisited links */
                    text-decoration: none; /* Remove underline for unvisited links */
                }

                .custom-link:visited,
                .navbar-brand:visited,
                .nav-link:visited {
                    color: #ffffff; /* Set the same color for visited links */
                }

                .gold-icon {
                    color: gold; /* Set the gold color */
                }
            `}</style>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container fluid>
                <Navbar.Brand href="/" className="custom-link">
                <FontAwesomeIcon icon={faVideoSlash} className="gold-icon" style={{ marginLeft: '10px', color: 'gold' }} /> Gold
                </Navbar.Brand>
                <NavLink className="nav-link custom-link" to="/watchList" style={{ marginLeft: '1300px', color: '#f0f0f0' }}>Watch List</NavLink>
                <NavLink className="nav-link custom-link" to="/" style={{ marginLeft: '10px', color: '#f0f0f0' }}>Home</NavLink>
                </Container>
            </Navbar>
        </React.Fragment>
    );
};

export default Header;
