import CatalogueCard from "../components/CatalogueCard"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navigationbar from "../components/Navigationbar";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
    <Container>
      <Navigationbar/>
      <Row>
        {new Array(1).fill(Math.random()).map((_, index) =>(
          <Col key={index}>
          <CatalogueCard />
          </Col>
        ))}
      </Row>
    </Container>
    <Container>
      <Footer/>
    </Container>
    </>
    
  )
}

export default Home
