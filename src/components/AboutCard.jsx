import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import '../index.css';

function AboutCard() {
  return (
    <Card className="portfolio-main-card">
      <Card.Body>
        <Card.Title className='portfolio-title'>About Me</Card.Title>
        <Card.Text className='portfolio-text'>
          I am enthusiastic about coding and continuously learning new technologies to stay updated in this fast-paced industry. My approach to software development is driven by a strong desire to solve complex problems and deliver high-quality solutions that make a real difference.
        </Card.Text>
        <div className="d-flex justify-content-center">
          <Button href="https://www.linkedin.com/in/yvonne-ndungu-b24104267/" className='portfolio-btn mx-2'>
            <FaLinkedin /> LinkedIn
          </Button>
          <Button href="#" className='portfolio-btn mx-2'>
            <FaGithub /> GitHub
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
