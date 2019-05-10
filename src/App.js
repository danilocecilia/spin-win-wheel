import React from 'react';
import './App.css';
import WinwheelSpinner from './component/WinwheelSpinner';
import ContactForm from './component/ContactForm';


function App() {
  return (
    <div className="wrapper">
      <div></div>
      <div className="container">
        <span className="header">Spin the weel to win the prize!</span>
        <ContactForm />
        <WinwheelSpinner />
      </div>
      <div></div>
    </div>
  );
}

export default App;
