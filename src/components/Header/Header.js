import React from 'react';
import './Header.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <Navbar className='navber' bg="light" expand="lg">
            <Container>
                <Navbar.Brand className='fs-2 fw-bold text-primary py-2' href="#home">Quiz Hunter</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto ">
    
                        <Link className='fs-4 mx-5 text-decoration-none' to='/' >Home</Link>
                        <Link className='fs-4 text-decoration-none' to='/allTpoic' >All Topics</Link>
                        <Link className='mx-5 fs-4 text-decoration-none' to='/statistics' >Statistics</Link>
                        <Link className='fs-4 text-decoration-none' to='/blog' >Blog</Link>


                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;