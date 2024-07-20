import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './App.css';
import ShortenForm from './components/ShortenForm';
import { Navbar, Container } from 'react-bootstrap';

function App() {
  return (
    <>
     <div className="fullscreen-container">
        {/* Navbar */}
        <Navbar className="navbar" bg="info" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="/urlIMG.png" // Path to the image in the public folder
            alt="Logo"
            height="40" // Adjust height as needed
            className="d-inline-block align-top"
            style={{ marginRight: '20px' }}
          />
          <span className="navbar-brand2">URL Shortener</span> {/* Text next to the image */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Add Navbar items here */}
        </Navbar.Collapse>
      </Container>
    </Navbar>

      {/* Main Content */}
      <Container className="transparent-container">
        <header className="App-header">
          {/* <h1 className="header">URL Shortener</h1> */}
          <ShortenForm />
        </header>
      </Container>
    </div>
      
    </>
  );
}

export default App;

