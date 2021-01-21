// import { Link } from "gatsby";
import React from "react"
// import { Link } from "gatsby"
import { Container, Navbar, Nav } from 'react-bootstrap';
// Styles
import styled from 'styled-components';

const NavStyle = styled.div`
  margin: 0;
  background-color: #101f2f; 
      a {
        margin-right: 10px;
        color: #06BDD6!important;
      }
          #navbarResponsive {
            margin-right: 5.8rem;
          }
          #navToggle {
            border: none;
            fill: #06BDD6;
          }
`;

const Header = ({ siteTitle }) => (
  <NavStyle>
   <Container>
      <Navbar expand="md">
        <Navbar.Brand href="/">{siteTitle}</Navbar.Brand> 
        <Navbar.Toggle id="navToggle" aria-controls="navbarResponsive" />
        <Navbar.Collapse id="navbarResponsive">
          <Nav as="ul" className="justify-content-center" activeKey="/home">
                <Nav.Item>
                  <Nav.Link href="/home">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/about">About</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/work">Work</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/projects">Projects</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav.Item>  
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    </Container>
  </NavStyle>
);

export default Header;

