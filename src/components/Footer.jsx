import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../index.css';

function Footer() {
  return (
    <Card className="portfolio-main-card text-center">
      <Card.Header className='portfolio-header'>Contact Info</Card.Header>
      <Card.Body>
        <Card.Title className='portfolio-title'>Special title treatment</Card.Title>
        <Card.Text className='portfolio-text'>
          Let's work together on your next project.
        </Card.Text>
        <Button className='portfolio-btn'>Go somewhere</Button>
      </Card.Body>
      <Card.Footer className="portfolio-footer-text">2 days ago</Card.Footer>
    </Card>
  );
}

export default Footer;
