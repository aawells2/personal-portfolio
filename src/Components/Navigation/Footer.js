import Nav from 'react-bootstrap/Nav';

import Behance from "../UI/Icons/Behance.svg"
import Envelope from "../UI/Icons/Envelope.svg"
import Linkedin from "../UI/Icons/Linkedin.svg"


function Footer() {
  return (
    <>
      <Nav className=" bg-info" activeKey="/home">
        <Nav.Item >
          <Nav.Link href="https://www.behance.net/">
            <img
            src={Behance}
            alt=''  
            />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='' eventKey="link-1">
          <img
            src={Envelope}
            alt='' 
          />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className='me-auto'>
          <Nav.Link href='https://www.linkedin.com/in/ariana-wells-08a57a206/' eventKey="link-2">
          <img
            src={Linkedin}
            alt='' 
          />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='' eventKey=""> Privacy Policy</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}

export default Footer;