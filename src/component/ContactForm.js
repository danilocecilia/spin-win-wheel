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
            <select id="provinces" class="form-control">
              <option value="" selected="" disabled="">Province</option>
              <option value="AB">Alberta</option>
              <option value="BC">British Columbia</option>
              <option value="MB">Manitoba</option>
              <option value="NB">New Brunswick</option>
              <option value="NL">Newfoundland and Labrador</option>
              <option value="NS">Nova Scotia</option>
              <option value="ON">Ontario</option>
              <option value="PE">Prince Edward Island</option>
              <option value="QC">Quebec</option>
              <option value="SK">Saskatchewan</option>
              <option value="NT">Northwest Territories</option>
              <option value="NU">Nunavut</option>
              <option value="YT">Yukon</option>
            </select>
          </Form.Group>
          <Form.Group>
            <Form.Control type="text" placeholder="Email" />
          </Form.Group>

          <Form.Group>
            <label class="container-disclaimer">Disclaimer here
              <Form.Control type="checkbox" placeholder="Email" />
              <span class="checkmark"></span>
            </label>
          </Form.Group>
        </form>
      </div>
    );
  }
}