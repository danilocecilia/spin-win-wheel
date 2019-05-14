import React, { useState } from 'react';
import './App.css';
import WinwheelSpinner from './component/WinwheelSpinner';
import AgeVerification from "./component/AgeVerification";
import MyModal from './component/Modal';

function App() {
  const [modal, setModalShow] = useState({modalShow: true});
  const [btn, setBtnStatus] = useState({disabled: false});

  const handleClick = (hasEnoughAge) => {
    if(hasEnoughAge)
      setModalShow({modalShow: !hasEnoughAge});
    else {
      setModalShow({modalShow: false});
      setBtnStatus({disabled: true});
    }
    
    console.log('modalShow: ', modal);
    console.log('User is 19+ years old: ' + hasEnoughAge);
  }

  const renderAgeVerification = () => {
      return <AgeVerification handleClick={(hasEnoughAge) => handleClick(hasEnoughAge)}/>
  }

  return (
    <div className="wrapper">
      <div></div>
      <div className="container">
        <span className="header">Spin the weel to win the prize!</span>
        <MyModal
          hideXButton={false}
          show={modal.modalShow}
          title={'You must be at least 19 years old to participate.'} 
          content={renderAgeVerification()}
          showCloseButton={false}/>
        <WinwheelSpinner disableButton={btn.disabled}/>
      </div>
      <div></div>
    </div>
  );
}

export default App;
