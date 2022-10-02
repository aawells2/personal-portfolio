import Nav from 'react-bootstrap/Nav';

function Footer() {
  return (
    <>
      <Nav className=" bg-dark" activeKey="/home">
        <Nav.Item >
          <Nav.Link href="/home">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item className='me-auto'>
          <Nav.Link eventKey="link-2">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey=""> Disabled</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}

export default Footer;