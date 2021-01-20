import React from 'react';
import { Link } from 'gatsby';
// Component imports
import styled from 'styled-components';
import Layout from '../components/layout';

const MainText = styled.div`
  text-align: center;
`;

const LinkStyle = styled.div`
  display: inline-block;
  justify-content: center;
  text-align: center;
`;

const IndexPage = () => (
  <Layout>
    // Hero Text
    <MainText>
      <h1>Creative Designer 
      <br /> & Developer</h1>
    </MainText>
    // Site Links
    <LinkStyle>
      <Link to="/page-2/">Github</Link>
      <Link to="/page-3/">LinkedIn</Link>
      <Link to="/page-4/">Facebook</Link>
      <Link to="/page-5/">Twitter</Link>
    </LinkStyle>
  </Layout>
);

export default IndexPage;