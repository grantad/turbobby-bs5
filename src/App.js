import './App.css';
import {Button, Nav, NavDropdown, Navbar, Container, Row, Col, Image, Card} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import exp from "./assets/exp_logo.png"
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
  MDBCarouselCaption,
} from 'mdb-react-ui-kit';




function App() {
  return (
    <div className="App">
      <header >
      <Navbar bg="light" variant="light">
  <Container>
    {/*commenting out navbar right now*/}
    <Navbar.Brand href="#home">
    <img src={exp} style={{width:100, marginTop: -7}} />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">About me</NavDropdown.Item>
          <NavDropdown.Item href="https://exprealty.com/agents/#/?country=US">About Exp</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Find Homes</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
    Bobby Turner
  </Container>
  </Navbar> 


      </header>
      <main>

        
      <Container>
  <Row className="px-4 my-5">
    <Col sm={7}>
      <Image src="https://media-exp1.licdn.com/dms/image/C4E03AQHFrnCfQHxNFw/profile-displayphoto-shrink_200_200/0/1620177424654?e=1659571200&v=beta&t=C_vpB7jtp7RT5oaw-_Cl_t8cpi_fZdNj0MqkjKTlyj8"
       fluid
       rounded 
       className=''
       />
    </Col>
    <Col sm={5}>
      <h1 className='font-weight-light'>Tagline</h1>
      <p>
      Experienced REALTOR and Operations Leader
       with current and past experience in real 
       estate, customer service, sales, banking, 
       finance, investments, forecasting,supply 
       chain, transportation, logistics, process 
       improvement, and exceeding BM targets 
       resulting in significant YOY improvements.
      </p>
      <Button variant='outline-primary'> Call to action </Button>
    </Col>
  </Row>
  <Card className='text-center bg-secondary text-white my-5 py-4'>
  <Card.Body>This call to action card is a great place to showcase some
     important information or display a clever tagline!.
     </Card.Body>
</Card>
  <Row>
    <Col>
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://photos.zillowstatic.com/fp/c731c7037dc5d8ae678e192e74e941af-p_e.jpg" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
    
    </Col>
    <Col>
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://photos.zillowstatic.com/fp/53ccdf03c56145906fc3a11cc40dd5dc-p_e.jpg" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
    
    </Col>
    <Col>
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://photos.zillowstatic.com/fp/661871506150bdf01a6029a4300380af-cc_ft_1536.webp" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Learn More</Button>
  </Card.Body>
</Card>
    
    </Col>
  </Row>
  
</Container>
      </main>
      <footer class="py-5 my-5 bg-light">
        <Container className='px-4'>
          <p class="text-center text-black">
            Copyright  &copy; Palmettodevs 2022
            </p>
        </Container>
        
      </footer>
    </div>
  );
}

export default App;
