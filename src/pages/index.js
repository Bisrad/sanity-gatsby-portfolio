import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Link } from 'gatsby';
// Component imports
import styled from 'styled-components';
import Layout from '../components/layout';
// Icon Import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const MainText = styled.div`
  text-align: center;
  font-size: 30px;
`;

const LinkStyle = styled.div`
  display: block;
  text-align: center;
    .icon {
      margin-right: 15px;
    }
`;

const IndexPage = () => (
  <Layout>
    {/* Hero Text */}
    <MainText>
      <h1>Creative Designer 
      <br /> & Developer</h1>
    </MainText>
    {/* Site Links */}
    <LinkStyle>
      <FontAwesomeIcon className="icon" icon={faGithub} size='2x' />
      <FontAwesomeIcon className="icon" icon={faFacebook} size='2x' />
      <FontAwesomeIcon className="icon" icon={faTwitter} size='2x' />
      <FontAwesomeIcon className="icon" icon={faLinkedin} size='2x' />
    </LinkStyle>
  </Layout>
);

export default IndexPage;