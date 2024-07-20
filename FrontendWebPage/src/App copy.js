import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './App.css';
import ShortenForm from './components/ShortenForm';
import { Navbar, Container } from 'react-bootstrap';

function App() {
  return (
    <>
      {/* Navbar */}
      <Navbar bg="info" expand="lg" fixed="top">
        <Container>
        <img
                            src="urlIMG.png"
                            alt="Logo"
                            height="40" // Adjust height as needed
                            className="d-inline-block align-top"
                        />
          <Navbar.Brand href="#home" className="navbar-brand2">URL Shortener</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          {/* <Navbar.Collapse id="basic-navbar-nav">
            <Navbar.Text > 
              <a href="#home">Home</a>
            </Navbar.Text>
            <Navbar.Text className="ms-3">
              <a href="#about">About</a>
            </Navbar.Text>
          </Navbar.Collapse> */}
        </Container>
      </Navbar>

      {/* Main Content */}
      <Container className="p-5">
        <header className="App-header">
          <h1 className="header">URL Shortener</h1>
          <ShortenForm />
        </header>
      </Container>
    </>
  );
}

export default App;



// import logo from './logo.svg';
// import React from 'react';
// import './App.css';
// import ShortenForm from './components/ShortenForm';


// function App() {
//     return (
        

//         <div className="App">
//             <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
//             <header className="App-header">
//                 <h1>URL Shortener</h1>
//                 <ShortenForm />
//             </header>
//             <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
//             <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
//             <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
//         </div>
//     );
// }

// export default App;





// import React from 'react';
// import { Container, Button, Alert } from 'react-bootstrap'; // Import Bootstrap components
// import './App.css';

// function App() {
//   return (
//     <Container className="mt-3">
//       <h1>Hello, world!</h1>
//       <Alert variant="success">
//         This is a success alert—check it out!
//       </Alert>
//       <Button variant="primary">Primary Button</Button>
//     </Container>
//   );
// }

// export default App;