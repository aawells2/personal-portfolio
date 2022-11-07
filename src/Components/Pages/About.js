import { Container, Row, Col } from "react-bootstrap";
import MyServicesCard from "../Cards/MyServicesCard";
function About(){
    return(
        <Container className="text-center">
            <h1 className="py-5">About Me</h1>

            <p>Hello! My name is Ariana, and I design and develop websites. My interest in web development came in 2019 when I decided to learn a new skill.

                Fast forward to today, and I've had the privilege of working on multiple student-led projects and organizations. My main focus these days is creating beautiful, accessible digital experiences for a variety of clients.
            </p>
            <h3 className="py-5">Skills</h3>
            <Row className="d-flex justify-content-center">
          <Col className="my-3"><MyServicesCard /></Col>
          <Col className="my-3"><MyServicesCard /></Col>
          
        </Row>


        </Container>
        
    )
}

export default About;