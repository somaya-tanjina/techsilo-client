import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import CustomLink from "../CustomLink/CustomLink";
import "./Header.css";

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    };
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="/" className="link me-4">
                                Home
                            </Nav.Link>
                            {user && (
                                <>
                                    <Nav.Link
                                        as={Link}
                                        to="/manageitems"
                                        className="link me-4"
                                    >
                                        Manage Items
                                    </Nav.Link>
                                    <Nav.Link
                                        as={Link}
                                        to="/additem"
                                        className="link me-4"
                                    >
                                        Add Item
                                    </Nav.Link>
                                    <Nav.Link
                                        as={Link}
                                        to="/myitems"
                                        className="link me-4"
                                    >
                                        My Items
                                    </Nav.Link>
                                </>
                            )}

                            <Nav.Link
                                as={Link}
                                to="/signup"
                                className="link me-4"
                            >
                                Sign Up
                            </Nav.Link>
                            <Nav.Link
                                as={Link}
                                to="/contact"
                                className="link me-4"
                            >
                                Contact
                            </Nav.Link>
                            <Nav.Link
                                as={CustomLink}
                                to="/blogs"
                                className="link me-4"
                            >
                                Blogs
                            </Nav.Link>
                            <Nav.Link
                                as={CustomLink}
                                to="/livechat"
                                className="link me-4"
                            >
                                Live Chat
                            </Nav.Link>
                            {user ? (
                                <button onClick={handleSignOut}>
                                    Sign Out
                                </button>
                            ) : (
                                <Nav.Link
                                    as={Link}
                                    to="/login"
                                    className="link me-4"
                                >
                                    Log In
                                </Nav.Link>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
