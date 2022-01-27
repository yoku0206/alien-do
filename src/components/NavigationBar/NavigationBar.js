import React from 'react';

import { LinkContainer } from 'react-router-bootstrap';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

import Button from '@mui/material/Button';

import './NavigationBar.css';

export default class NavigationBar extends React.Component {

    render() {
        return (
            <Container>
                <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
                    <Container fluid>
                        <LinkContainer to="/#">
                            <Navbar.Brand className="Yoku-Font-DDBB-B fs-4 disabled-link">
                                Alien Do
                                <span className="Yoku-Font-Iosevka ps-2">
                                    阿蓮都
                                </span>
                            </Navbar.Brand>
                        </LinkContainer>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto fs-5" id='MainNavBar'>
                                <LinkContainer to="/">
                                    <Nav.Link>首頁</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/link">
                                    <Nav.Link>Link</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/about">
                                    <Nav.Link>About</Nav.Link>
                                </LinkContainer>
                            </Nav>
                        </Navbar.Collapse>
                        <Button variant="outlined" size="medium" className="fs-6 fw-bold">
                            登入
                        </Button>
                    </Container>
                </Navbar>
            </Container>
        )
    }

}
