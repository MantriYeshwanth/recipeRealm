import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import  { useState } from 'react';
import FeedbackForm from './FeedbackForm';

function NavScrollExample() {
  const navbarStyle = {
    minHeight: '6.5rem', // Adjust the height as needed
    maxHeight: '6.5rem',
  };

  const brandStyle = {
    fontSize: '2rem', // Adjust the font size as needed
    display: 'flex',
    alignItems: 'center',
  };

  const linkStyle = {
    fontSize: '1.5rem', // Adjust the font size as needed
  };

  const logoStyle = {
    maxHeight: '18rem', // Adjust the height as needed
    marginRight: '1rem',
    display:'flex',
    alignItems:'centre'

  };
  const searchstyle = {
    minHeight: '4rem', 
    minWidth: '30rem',
  };

  const [showFeedbackModal, setShowFeedbackModal] = useState(false);

  const handleFeedbackClick = () => {
    setShowFeedbackModal(true);
  };

  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="lg" style={navbarStyle}>
      <Container fluid>
        <Navbar.Brand href="#" style={brandStyle}>
          <img src="Recipe Realm_transparent.png" alt="Logo" style={logoStyle} />
          {/* Recipe Realm */}
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link href="#action1" style={linkStyle}>Home</Nav.Link>
            <Nav.Link href="#action1" style={linkStyle}>Ingredients</Nav.Link>
            <Nav.Link href="#action1" style={linkStyle}>About</Nav.Link>
            <Nav.Link onClick={handleFeedbackClick} style={linkStyle}>
        Feedback
      </Nav.Link>
          </Nav>
          <Form className="d-flex" style={searchstyle}>
            <Form.Control
              type="search"
              placeholder="Search recipes.."
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
      <FeedbackForm
        show={showFeedbackModal}
        onHide={() => setShowFeedbackModal(false)}
      />
    </Navbar>
  );
}

export default NavScrollExample;
