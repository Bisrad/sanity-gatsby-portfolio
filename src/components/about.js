import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from 'react-bootstrap/Image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import styled from 'styled-components';

const LinkStyle = styled.div`
  display: block;
  margin-top: 1rem;
    .icon {
      margin-right: 30px;
      color: #06BDD6;
    }
`;

class About extends React.Component {
    render() {
        return(
            <Container style={{ padding: 50 }}>
                <Row>
                    <Col>
                        <h3>Hey, I'm Brad</h3>
                        <h5>Front End Developer</h5>
                        <h5>Web & Graphic Designer</h5>
                        <p>dapibus ipsum et sed aliquet, anim ipsum eu nec labore 
                        sapien dolor in felis nunc. et deserunt ex curabitur aliqua. t
                        incidunt mi. nullam nullam consectetur ut dapibus a quis, irure
                        risus fugiat</p>
                        <LinkStyle>
                            <FontAwesomeIcon className="icon" icon={faGithub} size='2x' />
                            <FontAwesomeIcon className="icon" icon={faFacebook} size='2x' />
                            <FontAwesomeIcon className="icon" icon={faTwitter} size='2x' />
                            <FontAwesomeIcon className="icon" icon={faLinkedin} size='2x' />
                        </LinkStyle>  
                        <LinkStyle>
                            <FontAwesomeIcon className="icon" icon={faGithub} size='2x' />
                            <FontAwesomeIcon className="icon" icon={faFacebook} size='2x' />
                            <FontAwesomeIcon className="icon" icon={faTwitter} size='2x' />
                        </LinkStyle>  
                    </Col>
                    <Col>
                        <Image src="src/images/ProfilePic.png/171x180" fluid />
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default About