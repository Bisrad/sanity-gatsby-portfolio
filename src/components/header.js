import { Link } from "gatsby";
import React from "react"
import { Navbar, Nav, Button, Form, Container } from 'react-bootstrap';
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
            /* margin-right: 5.8rem; */
          }
          #navToggle {
            border: none;
            fill: #06BDD6;
          }
          .pull-right {
            color: #ffffff;
          }
`;

const MainButton = styled.div`
    display: flex;
    justify-content: flex-end;
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
                <Form className="pull-right">
                  <MainButton>
                        <Button 
                            variant="default"
                            style={{ width: 60, borderColor: '#06BDD6', backgroundColor: 'none', color: '#06BDD6'  }}
                            >
                            <Link style={{ margin: 0 }} to="./pages/resume.js">Resume</Link>
                        </Button>    
                  </MainButton>
                </Form>
          </Navbar.Collapse>
        </Navbar>
    </Container>
  </NavStyle>
);

export default Header;

