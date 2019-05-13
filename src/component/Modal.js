import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap';

export default class MyModal extends Component {
  render() {
    return (
      <Modal
        {...this.props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton={this.props.hideXButton}>
          <Modal.Title id="contained-modal-title-vcenter">
            {this.props.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>{this.props.description}</h5>
          {this.props.content}
        </Modal.Body>
        { 
          this.props.showCloseButton ?
          <Modal.Footer>
            <Button onClick={this.props.onHide}>Close</Button>
          </Modal.Footer>
          : ''
        }
      </Modal>
    );
  }
}
