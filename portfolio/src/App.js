import React from 'react';
import { Container, Navbar, Nav, Row, Col, Card, Button } from 'react-bootstrap';
import { Github, Linkedin } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';

<script
  src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
  crossorigin></script>

const App = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
        <Container>
          <Navbar.Brand href="#home">Muhammad Hamid</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#education">Education</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="flex-grow-1">
        <section id="about" className="mb-5">
          <h2 className="mb-4">About Me</h2>
          <p>Innovative Software Developer focused on crafting robust applications with JavaScript and React.js. Experienced in MERN stack development with a passion for creating efficient and user-friendly web applications.</p>
        </section>

        <section id="skills" className="mb-5">
          <h2 className="mb-4">Skills</h2>
          <Row>
            {['Web Development', 'Frontend Coding', 'Backend Coding', 'HTML, CSS, and JavaScript', 'Problem-Solving', 'Computer Literacy', 'Resilience', 'Strong Communication'].map((skill, index) => (
              <Col key={index} md={3} className="mb-3">
                <Card className="h-100">
                  <Card.Body>
                    <Card.Text className="text-center">{skill}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </section>

        <section id="projects" className="mb-5">
          <h2 className="mb-4">Projects</h2>
          <Row>
            <Col md={6} className="mb-4">
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Recipe Finder Website</Card.Title>
                  <Card.Text>
                    <ul>
                      <li>Integrated with external recipe API to fetch diverse recipe data.</li>
                      <li>Developed search functionality for finding specific recipes.</li>
                      <li>Built recipe saving feature for personalized collections.</li>
                    </ul>
                  </Card.Text>
                  <Button variant="primary" href="https://recipeexplorer.netlify.app" target="_blank">View Project</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="mb-4">
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Full Stack E-commerce Website with Admin Dashboard</Card.Title>
                  <Card.Text>
                    <ul>
                      <li>Implemented responsive front-end with React.</li>
                      <li>Built RESTful API with Node.js and Express.js.</li>
                      <li>Designed and integrated MongoDB database.</li>
                      <li>Created secure admin dashboard for inventory management.</li>
                    </ul>
                  </Card.Text>
                  <Button variant="primary" href="https://myearthstore.netlify.app" target="_blank" className="me-2">View Store</Button>
                  <Button variant="secondary" href="https://dashboard-earthstore.netlify.app" target="_blank">View Dashboard</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </section>

        <section id="education" className="mb-5">
          <h2 className="mb-4">Education</h2>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Intermediate</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">F.G. Degree College, Wah</Card.Subtitle>
              <Card.Text>2022 - 2024</Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>Secondary</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">F.G. Public School No. 05, Wah</Card.Subtitle>
              <Card.Text>2020 - 2022</Card.Text>
            </Card.Body>
          </Card>
        </section>

        <section id="contact" className="mb-5">
          <h2 className="mb-4">Contact</h2>
          <p>Email: hamidawan768@gmail.com</p>
          <p>Phone: +92 3205020331</p>
          <div>
            <Button variant="outline-dark" href="https://www.linkedin.com/in/muhammad-h-517586243/" target="_blank" className="me-2">
              <Linkedin size={20} className="me-2" />
              LinkedIn
            </Button>
            <Button variant="outline-dark" href="https://github.com/HamidAlvi768" target="_blank">
              <Github size={20} className="me-2" />
              GitHub
            </Button>
          </div>
        </section>
      </Container>

      <footer className="bg-dark text-light py-3 mt-auto">
        <Container className="text-center">
          <p>&copy; 2024 Muhammad Hamid. All rights reserved.</p>
        </Container>
      </footer>
    </div>
  );
};

export default App;