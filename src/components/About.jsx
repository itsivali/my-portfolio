import React from 'react'
import Navigationbar from './Navigationbar'
import Container from 'react-bootstrap/esm/Container'
import AboutCard from './AboutCard'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import SelfCard from './SelfCard'

function About() {
  return (
    <>
    <Container>
    <Navigationbar />
    <AboutCard />
    <Row>
        {new Array(1).fill(Math.random()).map((_, index) =>(
          <Col key={index}>
          <SelfCard />
          </Col>
        ))}
      </Row>
    </Container>
   
    </>
  )
}

export default About