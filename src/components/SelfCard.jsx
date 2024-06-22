import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../index.css';

function SelfCard() {
  return (
    <Container className="portfolio-container">
      <Row className="justify-content-center">
        <Col md={12}>
          <Card className="portfolio-main-card">
            <Card.Body>
              <Row>
                <Col md={4}>
                  <Card className="portfolio-card">
                    <Card.Body>
                      <Card.Title className="portfolio-title">Professional Skills</Card.Title>
                      <Card.Text className="portfolio-text">
                        <strong>Profession:</strong> Software Engineer<br />
                        <strong>Specialization:</strong> Frontend Development<br />
                        <strong>Key Skills:</strong> ReactJS, JavaScript, HTML, CSS, Problem Solving
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card className="portfolio-card">
                    <Card.Body>
                      <Card.Title className="portfolio-title">Name: Yvonne Ndungu</Card.Title>
                      <Card.Text className="portfolio-text">
                        <strong>Key Skills:</strong> ReactJS, JavaScript, HTML, CSS, Problem Solving
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card className="portfolio-card">
                    <Card.Body>
                      <Card.Title className="portfolio-title">Contact Information</Card.Title>
                      <Card.Text className="portfolio-text">
                        <strong>Email:</strong> yvonne@example.com<br />
                        <strong>Phone:</strong> 0768-424-138<br />
                        <strong>LinkedIn:</strong> linkedin.com/in/yvonnendungu
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default SelfCard;
