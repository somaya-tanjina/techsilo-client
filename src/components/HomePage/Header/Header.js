import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import CustomLink from "../CustomLink/CustomLink";
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    };
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home">
                        <h2 className="fw-bold">
                            Tech-<span>Silo</span>
                        </h2>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link
                                as={CustomLink}
                                to="/"
                                className=" me-1 link"
                            >
                                Home
                            </Nav.Link>
                            {user && (
                                <>
                                    <Nav.Link
                                        as={CustomLink}
                                        to="/manageitems"
                                        className=" me-1 link"
                                    >
                                        Manage Items
                                    </Nav.Link>
                                    <Nav.Link
                                        as={CustomLink}
                                        to="/additem"
                                        className=" me-1 link"
                                    >
                                        Add Item
                                    </Nav.Link>
                                    <Nav.Link
                                        as={CustomLink}
                                        to="/myitems"
                                        className=" me-1 link"
                                    >
                                        My Items
                                    </Nav.Link>
                                </>
                            )}

                            <Nav.Link
                                as={CustomLink}
                                to="/signup"
                                className=" me-1 link"
                            >
                                Sign Up
                            </Nav.Link>
                            <Nav.Link
                                as={CustomLink}
                                to="/contact"
                                className=" me-1 link"
                            >
                                Contact
                            </Nav.Link>
                            <Nav.Link
                                as={CustomLink}
                                to="/blogs"
                                className=" me-1 link"
                            >
                                Blogs
                            </Nav.Link>

                            {user ? (
                                <button
                                    className="btn btn-dark "
                                    onClick={handleSignOut}
                                >
                                    Sign Out
                                </button>
                            ) : (
                                <Nav.Link
                                    as={CustomLink}
                                    to="/login"
                                    className=" me-1 link"
                                >
                                    Log In
                                </Nav.Link>
                            )}
                            <Nav.Link
                                as={CustomLink}
                                to="/livechat"
                                className="  me-1 link"
                            >
                                Live Chat
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
