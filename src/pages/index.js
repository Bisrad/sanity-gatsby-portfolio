import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Link } from 'gatsby';
// Component imports
import styled from 'styled-components';
import Layout from '../components/layout';
// Icon Import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Container, Jumbotron} from 'react-bootstrap';

const container = styled.div`
  padding: 0!important
`;

const MainText = styled.div`
  text-align: center;
   h1 {
      color: #06BDD6;
      font-size: 3.5rem!important;
   }
`;

const LinkStyle = styled.div`
  display: block;
  text-align: center;
  margin-top: 3rem;
    .icon {
      margin-right: 30px;
      color: #06BDD6;
    }
`;

const IndexPage = () => (
  <Layout>
    <Jumbotron fluid style={{ backgroundColor: '#101f2f' }}>
      <Container style={{ container }}>
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
          </Container>
        </Jumbotron>
  </Layout>
);

export default IndexPage;