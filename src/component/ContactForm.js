import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

export default class ContactForm extends Component {
  render() {
    return (
      <div className="contact">
        <form className="form">
            <Form.Group>
                <Form.Control type="text" placeholder="First Name" />
            </Form.Group>

            <Form.Group>
                <Form.Control type="text" placeholder="Last Name" />
            </Form.Group>

            <Form.Group>
                <Form.Control type="text" placeholder="Email" />
            </Form.Group>
        </form>
      </div>
    )
  }
}
