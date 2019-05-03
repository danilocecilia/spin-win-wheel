import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

export default class ContactForm extends Component {
  render() {
    return (
      <>
        <Form>
            <Form.Group>
                <Form.Control type="text" placeholder="First Name" />
            </Form.Group>

            <Form.Group>
                <Form.Control type="text" placeholder="Last Name" />
            </Form.Group>

            <Form.Group>
                <Form.Control type="text" placeholder="Email" />
            </Form.Group>
        </Form>      
      </>
    )
  }
}
