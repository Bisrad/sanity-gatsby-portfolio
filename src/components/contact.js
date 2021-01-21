import React from "react";
import { Container, Button, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const MainButton = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 15px;
`;

const LinkStyle = styled.div`
  display: flex;
  justify-content: center;
  margin: 3rem auto;
    .icon {
      margin-right: 30px;
      color: #06BDD6;
    }
`;

class Contact extends React.Component {
    render() {
        return(
            <Container style={{ padding: 50 }} >
            <h1 style={{ textAlign: 'center',  marginBottom:'2.5rem'  }}>{"<"}GetInTouch   {"/>"}</h1>
                  <h4 style={{ textAlign: 'center', marginBottom:'2.5rem' }}>  
                        Currently Looking to Join an Awesome development team 
                        to continue my path to Full stack Developer 
                  </h4>
                  <MainButton>
                    <Row>
                        <Button 
                            variant="default"
                            style={{ width: 350, borderColor: '#06BDD6', backgroundColor: 'none', color: '#06BDD6'  }}
                            >
                            See More at Github
                            </Button>    
                    </Row>
                  </MainButton>
                  <MainButton>
                    <Row>
                        <Button 
                            variant="default"
                            style={{ width: 350, borderColor: '#06BDD6', backgroundColor: 'none', color: '#06BDD6'  }}
                            >
                            Say Hello
                            </Button>    
                    </Row>
                  </MainButton>
                    <Row>
                        <LinkStyle>
                            <FontAwesomeIcon className="icon" icon={faGithub} size='2x' />
                            <FontAwesomeIcon className="icon" icon={faFacebook} size='2x' />
                            <FontAwesomeIcon className="icon" icon={faTwitter} size='2x' />
                            <FontAwesomeIcon className="icon" icon={faLinkedin} size='2x' />
                        </LinkStyle>  
                    </Row>
            </Container>
        );
    }
}

export default Contact