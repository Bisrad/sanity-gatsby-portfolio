import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import styled from 'styled-components';

const LeftStyle = styled.div`
    border-left: 1px;
    border-left-style: solid;
    height: vh100;
        p {
            padding-left: 15px;
        }
`;

class Work extends React.Component {
    render() {
        return(
            <Container id='work' style={{ borderRight: 3, padding: 50 }}>
                <Row>
                    <Col>
                    <h3 style={{ textAlign: 'left',  marginBottom:'2.5rem'  }}>{"<"}Where I've Worked  {"/>"}</h3>
                    <Row style={{ margin: 'auto' }}>
                    <ul style={{ margin: 0, padding: 0 }}>
                        <li style={{ paddingBottom: 20 }}>
                        <h5>Web Designer</h5>
                        </li>
                        <li style={{ paddingBottom: 20 }}>
                        <h5>Quality Assurance</h5>
                        </li>
                        <li style={{ paddingBottom: 20 }}>
                        <h5>Web Developer</h5>
                        </li>
                        <li style={{ paddingBottom: 20 }}>
                        <h5>Wordpress Developer</h5>
                        </li>
                    </ul>
                    </Row>
                        <Button 
                            variant="default"
                            style={{ width: 350, borderColor: '#06BDD6', backgroundColor: 'none', color: '#06BDD6'  }}
                            >
                            Say Hello
                        </Button>    
                    </Col>
                    <Col style={{ margin: 'auto' }}>
                    <LeftStyle>
                    <p>veniam, et amet, qui quis, platea elit. ullamco eu consequat mollis labore elit. mollis aliquam est mollis incididunt aute duis scelerisque ea mi. adipiscing congue, aute consectetur malesuada amet, id pretium a</p>
                    <p>veniam, et amet, qui quis, platea elit. ullamco eu consequat mollis labore elit. mollis aliquam est mollis incididunt aute duis scelerisque ea mi. adipiscing congue, aute consectetur malesuada amet, id pretium a</p>                    
                    </LeftStyle>
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default Work