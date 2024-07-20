import React, { useState } from 'react';
import { Container, Row, Col, Form, Button,  InputGroup,Table} from 'react-bootstrap';
import axios from 'axios';
import './ShortenForm.css';

const ShortenForm = () => {
    const [originalUrl, setOriginalUrl] = useState('');
    const [shortenedUrls, setShortenedUrls] = useState([]);

    
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log('Attempting to shorten URL');
  
      try {
        console.log('Sending request');
        const response = await axios.post('http://localhost:5000/shorten', {
          url: originalUrl
        });
  
        // If the request was successful, update the state with the shortened URL
        setShortenedUrls([
          ...shortenedUrls,
          { originalUrl, shortenedUrl: response.data.short_url }
        ]);
        setOriginalUrl('');
      } catch (error) {
        console.error('Error al acortar el URL:', error);
      }
    };
  
    const handleDelete = (shortenedUrl) => {
      setShortenedUrls(shortenedUrls.filter(url => url.shortenedUrl !== shortenedUrl));
    };
  
    const handleRedirect = (originalUrl) => {
      console.log('Redirigiendo', originalUrl);
      window.location.href = originalUrl;
    };

    const handleCopy = (shortenedUrl) => {
        navigator.clipboard.writeText(shortenedUrl).then(() => {
          alert('Shortened URL copied to clipboard!');
        }).catch(err => {
          console.error('Failed to copy the shortened URL: ', err);
        });
      };
  
    return (
      <Container fluid className="p-4">
        {/* Form Row */}
        <Row className="mb-4">
          <Col xs={12}>
            <Form onSubmit={handleSubmit}>
              <InputGroup>
                <Form.Control
                  type="text"
                  value={originalUrl}
                  onChange={(e) => setOriginalUrl(e.target.value)}
                  placeholder="Enter URL"
                />
                <Button variant="primary" type="submit">Shorten</Button>
              </InputGroup>
            </Form>
          </Col>
        </Row>
  
         {/* Table Row */}
      {shortenedUrls.length > 0 && (
        <Row>
          <Col xs={12} className="table-container">
            <Table striped bordered hover responsive className="table-sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Original URL</th>
                  <th>Shortened URL</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {shortenedUrls.map((url, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td className="break-word">{url.originalUrl}</td>
                    <td className="break-word">{url.shortenedUrl}</td>
                    <td>
                      <Button variant="warning"  className="me-2" onClick={() => handleCopy(url.shortenedUrl)}>Copy</Button>
                      <Button variant="success" className="me-2" onClick={() => handleRedirect(url.originalUrl)}>Redirect</Button>
                      <Button variant="danger"  className="me-2" onClick={() => handleDelete(url.shortenedUrl)}>Delete</Button>
                      
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      )}
    </Container>
  );
};
  
  export default ShortenForm;