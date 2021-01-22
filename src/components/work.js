import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";


class Work extends React.Component {
    render() {
        return(
            <Container style={{ borderRight: 3, padding: 50 }}>
                <Row>
                    <Col>
                    <h3 style={{ textAlign: 'left',  marginBottom:'2.5rem'  }}>{"<"}Where I've Worked  {"/>"}</h3>
                    <Row>
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
                    <Col>
                    <p>veniam, et amet, qui quis, platea elit. ullamco eu consequat mollis labore elit. mollis aliquam est mollis incididunt aute duis scelerisque ea mi. adipiscing congue, aute consectetur malesuada amet, id pretium a</p>
                    <p>veniam, et amet, qui quis, platea elit. ullamco eu consequat mollis labore elit. mollis aliquam est mollis incididunt aute duis scelerisque ea mi. adipiscing congue, aute consectetur malesuada amet, id pretium a</p>
                    <p>veniam, et amet, qui quis, platea elit. ullamco eu consequat mollis labore elit. mollis aliquam est mollis incididunt aute duis scelerisque ea mi. adipiscing congue, aute consectetur malesuada amet, id pretium a</p>
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default Work