import {  Row, Col, Button } from "react-bootstrap";
import MyServicesCard from "../Cards/MyServicesCard";

import CodeSlash from "../UI/Icons/CodeSlash.svg"
import Easel from "../UI/Icons/Easel.svg"
import GraphUp from "../UI/Icons/GraphUp.svg"

function Home(){
return(
    <div className="">
        <div className=" min-vh-75 px-5 py-5 bg-primary">
            <p className="text-success">Hi, my name is </p>
                <h1 className="display-1 text-white">Ariana Wells</h1>
                <p className="text-success pb-5 mb-5">I'm a full stack developer specializing in 
                    designing and developing interactive, user friendly, and 
                    scalable applications. Check out some of my work below.
                </p>
        </div>
        
            
        <div className="bg-light">

        
        
        <h3 className="text-center py-5">My Services</h3>
        
        

        <Row className="">
           <Col xs={12} md={4} className="my-3"><MyServicesCard
           svgIcon={CodeSlash}
           title='Web Development'
           text='Whether you want a website powered by CMS or handwritten, I'
           /></Col>
          <Col xs={12} md={4} className="my-3"><MyServicesCard
          svgIcon={Easel}
          title='Graphic Design'
          text='I design everything from posters to business cards'
           /></Col>
          <Col xs={12} md={4} className="my-3"><MyServicesCard
          svgIcon={GraphUp}
          title='Search Engine Optimization'
          text='I focus on helping businesses drive more traffic to their site' /></Col>
          
        </Row>
        </div>
      <div className="text-center bg-secondary py-5">
        <p className="text-success">"original and with an innate understanding of her customer's needs,
            Ariana is always a pleasure to work with."
        </p>
        <p className="text-success">-Jane Miller</p>
      </div>
      <div className="text-center py-5">
        <h3>Questions?</h3>
        <p>Whether you're curious about feautures, a fee trial, or just want to get to know more about me, I'm here to answer any Questions

        </p>
        <Button>Lets Talk Now</Button>
      </div>

    </div>
    
)
}
export default Home;