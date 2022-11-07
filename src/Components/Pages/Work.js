import { Button, Col, Container, Row } from "react-bootstrap";
import PortfolioCard from "../Cards/PortfolioCard";

function Work(){
    return(
         <Container className="py-5">
          <div className="text-center pb-5">
          <h1>Album Example</h1>
          <p>Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
          <Button className="mx-5">Web Development</Button>
          <Button>Graphic Design</Button>
          </div>
              
          <Row className="my-5">
          <Col xs={12} md={4} className="my-3"> <PortfolioCard /></Col>
          <Col xs={12} md={4} className="my-3"> <PortfolioCard /></Col>
          <Col xs={12} md={4} className="my-3"> <PortfolioCard /></Col>
          <Col xs={12} md={4} className="my-3"> <PortfolioCard /></Col>
          <Col xs={12} md={4} className="my-3"> <PortfolioCard /></Col>
          <Col xs={12} md={4} className="my-3"> <PortfolioCard /></Col>
          <Col xs={12} md={4} className="my-3"> <PortfolioCard /></Col>
          <Col xs={12} md={4} className="my-3"> <PortfolioCard /></Col>
          <Col xs={12} md={4} className="my-3"> <PortfolioCard /></Col>
          </Row>
               
          

         </Container>
    )
    }
    export default Work;