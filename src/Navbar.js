import React from "react";
import logo from "./assets/JohnLogo.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "./contexts/ThemeContext"; // Import the custom hook
import { FaMoon, FaSun } from "react-icons/fa";

function Navigation() {
  const { theme, toggleTheme } = useTheme(); // Get theme and toggle function from context
  const location = useLocation();

  return (
    <div className={`navbar-container ${theme}`}>
      {" "}
      {/* Apply theme to the whole container */}
      <Navbar
        expand="lg"
        variant={theme} // Dark or Light variant for text color
        className={theme === "dark" ? "navbar-dark" : "navbar-light"} // Navbar color theme
      >
        <Container fluid className="container-margin">
          <Navbar.Brand as={Link} to="/">
            <img src={logo} className="App-logo" alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-responsive" />
          <Navbar.Collapse id="navbar-responsive" className="mobile-navbar">
            <Nav className="my-7"></Nav>
            <Nav>
              <Nav.Link
                as={Link}
                to="/"
                className={location.pathname === "/" ? "active" : ""}
              >
                Home
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/about"
                className={location.pathname === "/about" ? "active" : ""}
              >
                About
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/projects"
                className={location.pathname === "/projects" ? "active" : ""}
              >
                Projects
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/resume"
                className={location.pathname === "/resume" ? "active" : ""}
              >
                Resume
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/contact"
                className={location.pathname === "/contact" ? "active" : ""}
              >
                Contact
              </Nav.Link>
              <Nav.Link onClick={toggleTheme} className="theme-toggle">
                <div className={`toggle-button ${theme}`}>
                  <span className="icon">
                    {theme === "light" ? <FaMoon color="dark" /> : <FaSun />}{" "}
                    {/* Use moon for light mode, sun for dark mode */}
                  </span>
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigation;
