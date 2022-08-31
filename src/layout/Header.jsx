import "../styles/header.scss";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Avatar from '@mui/material/Avatar';
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <>
            {['md'].map((expand) => (
                <Navbar key={expand} style={{
                    backgroundColor: "#FFFFFF",
                }} expand={expand} className="mb-3">
                    <Container fluid>
                        <Navbar.Brand href="#">
                            <img className='logo' height="100" width="100" src="https://images.pexels.com/photos/792953/pexels-photo-792953.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="church" />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    C H U R C H
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-center flex-grow-1 pe-3">
                                    <Nav.Link href="#action1" className="link__color" as={NavLink} to="/dashboard">Dashboard</Nav.Link>
                                    <Nav.Link href="#action2" className="link__color" >Family</Nav.Link>
                                    <Nav.Link href="#action1" className="link__color" >Members</Nav.Link>
                                    <Nav.Link href="#action2" className="link__color" as={NavLink} to="/table">Payments & dues</Nav.Link>
                                </Nav>
                                <Form className="d-flex align-items-center space__right">
                                    <NotificationsNoneIcon className="notification__icon" fontSize="large" />
                                    <div
                                        className="d-flex justify-content-center align-items-center text-white"
                                    >
                                        <span className="fs-3 content__number">4</span>
                                    </div>
                                    <span className="text-muted">|</span>&nbsp;&nbsp;&nbsp;&nbsp;
                                    <div className="d-flex align-items-center">
                                        <p className="user__name">Mallika Deshmukh</p> <Avatar sx={{ width: 75, height: 75 }} className="avtar__img" alt="Remy Sharp" src="https://images.pexels.com/photos/3783513/pexels-photo-3783513.jpeg?auto=compress&cs=tinysrgb&w=1600" />
                                    </div>
                                </Form>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    );
}

export default Header;