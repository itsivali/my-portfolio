import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../index.css'; 

function CatalogueCard() {
  return (
    <>
      <Container className='portfolio-container'>
        <Row>
          <Col>
            <Card className='portfolio-main-card'>
              <Card.Img variant="top" src="https://i.pinimg.com/564x/d7/b5/08/d7b508615558373f09e50a5b63b3782f.jpg" className='portfolio-img' />
              <Card.Body>
                <Card.Title className='portfolio-title'>Name: Yvonne Ndungu</Card.Title>
                <Card.Text className='portfolio-text'>
                  Software engineer
                  Frontend Development
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default CatalogueCard;
