import React from 'react';
import './App.css';
// import { Container, Col, Row } from 'react-bootstrap';
import WinwheelSpinner from './component/WinwheelSpinner';
import ContactForm from './component/ContactForm';

function App() {
  return (
    <div className="wrapper">
      <div></div>
      <div className="container">
        <ContactForm />
        <WinwheelSpinner />
      </div>
      <div></div>
    </div>
  );
}

export default App;
