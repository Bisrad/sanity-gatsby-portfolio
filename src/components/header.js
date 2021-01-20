import React from "react"
import { Link } from "gatsby"
// Styles
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  background: #11202E;
  margin-bottom: 1.45rem;
`;

const Headline = styled.div`
  margin: 0 auto;
  max-width: 960;
  padding: 1.45rem 1.0875rem;
  h1 {
    margin: 0;
  }
`;

const StyledLink = styled(Link)`
  color: #06BDD6;
  textDecoration: none;
`;

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <Headline>
      <h1>
        <StyledLink to="/">{siteTitle}</StyledLink>
      </h1>
    </Headline>
  </HeaderWrapper>
);

export default Header;

