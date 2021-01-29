import { Link } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import styled from 'styled-components';
import { Col, Container, Row, Image, Button } from 'react-bootstrap';
import img1 from '../images/ProfilePic.png';



const ResumeStyles = styled.div`
    display: flex;
    justify-content: center;
    margin: 4rem;
    padding: 2rem;
        Col {
            padding: 2rem;
        }
        h2, h5 {
            text-align: center;
            margin: auto;

        }
`;

const MainButton = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: .4,
            width: 250
        }}
    />
);


class Resume extends React.Component {
    render() {
        return(
            <Layout>
            <ResumeStyles>
            <Container>
            <div>
            <Link to="/">Back to Projects</Link>
            </div>
            <Row>
            <Col>
            <Image  src={img1} alt="profile pic" fluid/>
            <h2>Brad Thompson</h2>
            <h5>Front End Developer</h5>
            <Row style={{ justifyContent: 'center', marginTop: 25 }}>
                <i style={{ marginRight: 15 }}>env   </i>
                <span>Bisraddesign@gmail.com</span>
                <br />
            </Row>
                <ColoredLine color="#06BDD6" />
            <Row style={{ justifyContent: 'center', marginTop: 25 }}>
                <i style={{ marginRight: 15 }}>env   </i>
                <span>Bisraddesign@gmail.com</span>
                <br />
            </Row>
                <ColoredLine color="#06BDD6" />
            <Row style={{ justifyContent: 'center', marginTop: 25 }}>
                <i style={{ marginRight: 15 }}>env   </i>
                <span>Phoenix, AZ</span>
                <br />
            </Row>
                <ColoredLine color="#06BDD6" />
            <Row style={{ justifyContent: 'center', marginTop: 25 }}>
                <i style={{ marginRight: 15 }}>env   </i>
                <span>Design & Development</span>
                <br />
            </Row>
                <ColoredLine color="#06BDD6" />
                <Row style={{ justifyContent: 'center' }}>
                <MainButton>
                        <Button 
                            variant="default"
                            style={{width: 60, borderColor: '#06BDD6', backgroundColor: 'none', color: '#06BDD6'  }}
                            >
                            <Link style={{ margin: 0 }} to="/resume">Resume</Link>
                        </Button>    
                  </MainButton>
                </Row>
            </Col>
            <Col>
            <h1>Col2</h1>

            </Col>
            </Row>
            </Container>
            </ResumeStyles>
            </Layout>
        );
    }
}

export default Resume