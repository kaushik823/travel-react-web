import "./App.css";
// import { BiSearchAlt2 } from "react-icons/bi";
// import { IoMdContact } from "react-icons/io";
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Carousel, Navbar, Nav, Button, Container, Form, Row, Col,} from "react-bootstrap";

function App() {
  return (
    <body>
      {/* {/* header section  */}
      <Navbar bg="light" expand="lg" className="bg-dark">
        <Container fluid>
          <Navbar.Brand href="#">
            <span className="logo">T</span>
            <span className="main_logo">RAVEL</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav 
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1" className="text-light">
                Home
              </Nav.Link>
              <Nav.Link href="#action2" className="text-light">
                Book
              </Nav.Link>
              <Nav.Link href="#action2" className="text-light">
                Packages
              </Nav.Link>
              <Nav.Link href="#action2" className="text-light">
                Services
              </Nav.Link>
              <Nav.Link href="#action2" className="text-light">
                Gallery
              </Nav.Link>
              <Nav.Link href="#action2" className="text-light">
                Review
              </Nav.Link>
              <Nav.Link href="#action2" className="text-light">
                Contact
              </Nav.Link>
            </Nav>
            {/* <BiSearchAlt2 className="icon" /> */}
            {/* <IoMdContact className="icon" /> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* slider section */}

      <div className="slider">
        <Carousel>
          <Carousel.Item>
            <video className="d-block w-100" autoPlay muted loop>
              <source
                src={require("./images/vid-1.mp4")}
                type="video/mp4"
              ></source>
            </video>

            <Carousel.Caption>
            <div className="img_caption">
              <h3>Adventure is worthwhile</h3>
              <p>Discover new places with us, adventure awaits</p>
              <Button variant="outline-warning" className="btn">
                  Discover More
                </Button>{" "}
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <video className="d-block w-100" autoPlay muted loop>
              <source
                src={require("./images/vid-2.mp4")}
                type="video/mp4"
              ></source>
            </video>

            <Carousel.Caption >
            <div className="img_caption">
              <h3>Adventure is worthwhile</h3>
              <p>Discover new places with us, adventure awaits.</p>
              <Button variant="outline-warning" className="btn">
                  Discover More
                </Button>{" "}
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <video className="d-block w-100" autoPlay muted loop>
              <source
                src={require("./images/vid-3.mp4")}
                type="video/mp4"
              ></source>
            </video>
            <Carousel.Caption >
            <div className="img_caption">
              <h3>Adventure is worthwhile</h3>
              <p>Discover new places with us, adventure awaits</p>
              <Button variant="outline-warning" className="btn">
                  Discover More
                </Button>{" "}
                </div>
            </Carousel.Caption>{" "}
            */
          </Carousel.Item>
          <Carousel.Item>
            <video className="d-block w-100" autoPlay muted loop>
              <source
                src={require("./images/vid-4.mp4")}
                type="video/mp4"
              ></source>
            </video>

            <Carousel.Caption >
            <div className="img_caption">
              <h3>Adventure is worthwhile</h3>
              <p>Discover new places with us, adventure awaits</p>
              <Button variant="outline-warning" className="btn">
                  Discover More
                </Button>{" "}
                </div>
              
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <video className="d-block w-100" autoPlay muted loop>
              <source
                src={require("./images/vid-5.mp4")}
                type="video/mp4"
              ></source>
            </video>

            <Carousel.Caption className="img_caption">
              <div className="img_caption">
                <h3>Adventure is worthwhile</h3>
                <p>Discover new places with us, adventure awaits</p>
                <Button variant="outline-warning" className="btn">
                  Discover More
                </Button>{" "}
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="text-center py-5">
        <Button variant="warning" className="btn_b">
          B
        </Button>{" "}
        <Button variant="warning" className="btn_b">
          O
        </Button>{" "}
        <Button variant="warning" className="btn_b">
          O
        </Button>{" "}
        <Button variant="warning" className="btn_b">
          K
        </Button>{" "}
        <Button variant="warning" className="btn_b">
          N
        </Button>{" "}
        <Button variant="warning" className="btn_b">
          O
        </Button>{" "}
        <Button variant="warning" className="btn_b">
          W
        </Button>{" "}
      </div>

      {/* form section */}

      <div className="container py-5">
        <div className="row">
          <div className="col-6">
            {/* <img src={require("./images/book-img.png")}></img> */}
          </div>
          <div className="col-6">
            <Form className="box_container">
              <Form.Group className="mb-3" controlId="formBasicwhereto">
                <Form.Label>Where To</Form.Label>
                <Form.Control type="text" placeholder="Place Name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasichowmany">
                <Form.Label>How many</Form.Label>
                <Form.Control type="number" placeholder="number of guest" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicarrivals">
                <Form.Label>Arrivals</Form.Label>
                <Form.Control type="date" placeholder="mm/dd/yy" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicleaving">
                <Form.Label>Leaving</Form.Label>
                <Form.Control type="date" placeholder="mm/dd/yy" />
              </Form.Group>

              <Button variant="warning" type="submit" id="btn">
                Book Now
              </Button>
            </Form>
          </div>
        </div>
      </div>

      <div className="text-center py-5">
        <Button variant="warning" className="btn_b">
          P
        </Button>{" "}
        <Button variant="warning" className="btn_b">
          A
        </Button>{" "}
        <Button variant="warning" className="btn_b">
          C
        </Button>{" "}
        <Button variant="warning" className="btn_b">
          K
        </Button>{" "}
        <Button variant="warning" className="btn_b">
          A
        </Button>{" "}
        <Button variant="warning" className="btn_b">
          G
        </Button>{" "}
        <Button variant="warning" className="btn_b">
          E
        </Button>{" "}
        <Button variant="warning" className="btn_b">
          S
        </Button>{" "}
      </div>

      <div className="product_section">
        <Container>
          <Row className="product">
            <Col>
              <Card>
                <Card.Img
                  variant="top"
                  src={require("./images/p-1.jpg")}
                  className="img1"
                />
                <Card.Body>
                  <Card.Title>Mumbai </Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veritatis, nam!
                  </Card.Text>
                  <Card.Text>$90.00</Card.Text>

                  <Button variant="light">Book Now</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" src={require("./images/p-2.jpg")} />
                <Card.Body>
                  <Card.Title>hawaii </Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veritatis, nam!
                  </Card.Text>
                  <Card.Text>$90.00</Card.Text>
                  <Button variant="light">Book Now</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" src={require("./images/p-1.jpg")} />
                <Card.Body>
                  <Card.Title>Lavender Bath Bomb</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veritatis, nam!
                  </Card.Text>
                  <Card.Text>$90.00</Card.Text>
                  <Button variant="light">Book Now</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="product_section">
        <Container>
          <Row className="product">
            <Col>
              <Card>
                <Card.Img
                  variant="top"
                  src={require("./images/p-4.jpg")}
                  className="img1"
                />
                <Card.Body>
                  <Card.Title> Paris</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veritatis, nam!
                  </Card.Text>
                  <Card.Text>$90.00</Card.Text>

                  <Button variant="light">Book Now</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" src={require("./images/p-5.jpg")} />
                <Card.Body>
                  <Card.Title>Tokyo</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veritatis, nam!
                  </Card.Text>
                  <Card.Text>$90.00</Card.Text>
                  <Button variant="light">Book Now</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" src={require("./images/p-6.jpg")} />
                <Card.Body>
                  <Card.Title>Eypt</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veritatis, nam!
                  </Card.Text>
                  <Card.Text>$90.00</Card.Text>
                  <Button variant="light">Book Now</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      {/* SERVICE SECTION */}
      <div className="text-center py-5">
        <Button variant="warning" className="btn_b">
          S
        </Button>{" "}
        <Button variant="warning" className="btn_b">
          E
        </Button>{" "}
        <Button variant="warning" className="btn_b">
          R
        </Button>{" "}
        <Button variant="warning" className="btn_b">
          V
        </Button>{" "}
        <Button variant="warning" className="btn_b">
          I
        </Button>{" "}
        <Button variant="warning" className="btn_b">
          C
        </Button>{" "}
        <Button variant="warning" className="btn_b">
          E
        </Button>{" "}
        <Button variant="warning" className="btn_b">
          S
        </Button>{" "}
      </div>

      <div className="product_section">
        <Container>
          <Row className="product">
            <Col>
             
            </Col>
          </Row>
        </Container>
      </div>

      <div className="text-center py-5">
        <Button variant="warning" className="btn_b">
          G
        </Button>{" "}
        <Button variant="warning" className="btn_b">
          A
        </Button>{" "}
        <Button variant="warning" className="btn_b">
          L
        </Button>{" "}
        <Button variant="warning" className="btn_b">
          L
        </Button>{" "}
        <Button variant="warning" className="btn_b">
          E
        </Button>{" "}
        <Button variant="warning" className="btn_b">
          R
        </Button>{" "}
        <Button variant="warning" className="btn_b">
          Y
        </Button>{" "}
      </div>
      <div className="product_section">
        <Container>
          <Row className="product">
            <Col>
              <Card>
                <Card.Img
                  variant="top"
                  src={require("./images/g-1.jpg")}
                  className="img1"
                />
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" src={require("./images/g-2.jpg")} />
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" src={require("./images/g-3.jpg")} />
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="product_section">
        <Container>
          <Row className="product">
            <Col>
              <Card>
                <Card.Img
                  variant="top"
                  src={require("./images/g-4.jpg")}
                  className="img1"
                />
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" src={require("./images/g-5.jpg")} />
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" src={require("./images/g-6.jpg")} />
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="product_section">
        <Container>
          <Row className="product">
            <Col>
              <Card>
                <Card.Img
                  variant="top"
                  src={require("./images/g-7.jpg")}
                  className="img1"
                />
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" src={require("./images/g-8.jpg")} />
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" src={require("./images/g-9.jpg")} />
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="text-center py-5">
        <Button variant="warning" className="btn_b">
          R
        </Button>{" "}
        <Button variant="warning" className="btn_b">
          E
        </Button>{" "}
        <Button variant="warning" className="btn_b">
          V
        </Button>{" "}
        <Button variant="warning" className="btn_b">
          I
        </Button>{" "}
        <Button variant="warning" className="btn_b">
          E
        </Button>{" "}
        <Button variant="warning" className="btn_b">
          W
        </Button>{" "}
      </div>

      <div className="text-center py-5">
        <Button variant="warning" className="btn_b">
          C
        </Button>{" "}
        <Button variant="warning" className="btn_b">
          O
        </Button>{" "}
        <Button variant="warning" className="btn_b">
          N
        </Button>{" "}
        <Button variant="warning" className="btn_b">
          T
        </Button>{" "}
        <Button variant="warning" className="btn_b">
          A
        </Button>{" "}
        <Button variant="warning" className="btn_b">
          C
        </Button>{" "}
        <Button variant="warning" className="btn_b">
          T
        </Button>{" "}
      </div>

      <div className="container py-5">
        <div className="row">
          <div className="col-6">
            {/* <img src={require("./images/contact-img.png")}></img> */}
          </div>
          <div className="col-6">
            <Form className="box_container">
              <Form.Group className="mb-3" controlId="formBasicwhereto">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Place Name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicarrivals">
                <Form.Label>Number</Form.Label>
                <Form.Control type="Number" placeholder="Number" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicleaving">
                <Form.Label>Subject</Form.Label>
                <Form.Control type="Subject" placeholder="Subject" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicleaving">
                <Form.Label>Message</Form.Label>
                <Form.Control type="Subject" placeholder="Subject" />
              </Form.Group>


              <Button variant="warning" type="submit" id="btn">
               Send Message
              </Button>
            </Form>
          </div>
        </div>
      </div>

      {/* <div className="brand-container">
      <img src={require("./images/1.jpg")}></img>
      <img src={require("./images/2.jpg")}></img>
      <img src={require("./images/3.jpg")}></img>
      <img src={require("./images/4.jpg")}></img>
      <img src={require("./images/5.jpg")}></img>
      <img src={require("./images/6.jpg")}></img>
     
      </div> */}

      {/* footer section */}
      {/* <section className="footer">
  <div className="box-container">
    <div className="box">
      <h3>about us</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quas magni pariatur est accusantium voluptas enim nemo facilis sit debitis.</p>
    </div>
    <div className="box">
      <h3>branch locations</h3>
      <a href="#">india</a>
      <a href="#">USA</a>
      <a href="#">japan</a>
      <a href="#">france</a>
    </div>
    <div className="box">
      <h3>quick links</h3>
      <a href="#">home</a>
      <a href="#">book</a>
      <a href="#">packages</a>
      <a href="#">services</a>
      <a href="#">gallery</a>
      <a href="#">review</a>
      <a href="#">contact</a>
    </div>
    <div className="box">
      <h3>follow us</h3>
      <a href="#">facebook</a>
      <a href="#">instagram</a>
      <a href="#">twitter</a>
      <a href="#">linkedin</a>
    </div>
  </div>
  <h1 className="credit"> created by <span> mr. web designer </span> | all rights reserved! </h1>
</section> */}


    </body>
    
  );
}

export default App;
