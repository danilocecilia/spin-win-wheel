import React from 'react';
import './App.css';
import { Container, Col, Row } from 'react-bootstrap';
import WinwheelSpinner from './component/WinwheelSpinner';
import ContactForm from './component/ContactForm';

function App() {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col className="col-lg-6">
          <ContactForm/>
        </Col>
      </Row>
      <Row>
        <Col>
          <WinwheelSpinner />
        </Col>
      </Row>
      
    </Container>
  );
}

export default App;
