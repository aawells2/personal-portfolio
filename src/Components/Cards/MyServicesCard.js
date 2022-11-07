import Card from 'react-bootstrap/Card';

function MyServicesCard(props) {
  return (
    <Card border="light" bg="light" className='mx-auto' >
      <Card.Img variant="top" src={props.svgIcon} class="img-fluid w-25 mx-auto d-block"/>
      <Card.Body className='text-center'>
        <Card.Title>{props.title}</Card.Title>
        
        <Card.Text>{props.text}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default MyServicesCard;