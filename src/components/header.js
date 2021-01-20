import { Link } from "gatsby";
import React from "react"
// import { Link } from "gatsby"
import { Container, Navbar, Nav } from 'react-bootstrap';
// Styles
// import styled from 'styled-components';

// const HeaderWrapper = styled.div`
//   background: #11202E;
//   margin-bottom: 1.45rem;
// `;

// const Headline = styled.div`
//   margin: 0 auto;
//   max-width: 960;
//   padding: 1.45rem 1.0875rem;
//   h1 {
//     margin: 0;
//   }
// `;

// const StyledLink = styled(Link)`
//   color: #06BDD6;
//   textDecoration: none;
// `;

const Header = ({ siteTitle }) => (
  <>
      <Navbar expand="md">
        <Navbar.Brand href="/">{siteTitle}</Navbar.Brand> 
        <Navbar.Toggle aria-controls="navbarResponsive" />
        <Navbar.Collapse id="navbarResponsive">
          <Nav as="ul">
            <Nav.Item as='li' style={{ display: 'flex' }}>
             <StyledLink>
              <Link to="/page-2" className="nav-link" activeClassName='active'>Home</Link>
              <Link to="/page-3" className="nav-link" activeClassName='active'>About</Link>
              <Link to="/page-4" className="nav-link" activeClassName='active'>Work</Link>
              <Link to="/page-5" className="nav-link" activeClassName='active'>Projects</Link>
              <Link to="/page-6" className="nav-link" activeClassName='active'>Contact</Link>
              </StyledLink>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  </>
);

export default Header;

