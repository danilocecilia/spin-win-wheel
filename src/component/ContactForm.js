import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

import isEmail from 'validator/lib/isEmail';
// import isMobilePhone from 'validator/lib/isMobilePhone'

export default class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      province: "",
      disclaimer: false,

      showErrors: false,
      success: null,

      errors: {}
    }
  }


  updateField = (e, key) => {
    this.setState({
      [key]: e.target.value
    }, () => {
      this.validate();
    });
  }

  validate = () => {
    let errors = {
      firstname: false,
      lastname: false,
      email: false,
      province: false,
      disclaimer: false
    };
    let hasErrors = false;

    if (this.state.firstname.trim() === "") {
      errors.firstname = true;
      hasErrors = true;
    }

    if (this.state.lastname.trim() === "") {
      errors.lastname = true;
      hasErrors = true;
    }

    if (!isEmail(this.state.email)) {
      errors.email = true;
      hasErrors = true;
    }

    if (this.state.province.trim() === "") {
      errors.province = true;
      hasErrors = true;
    }

    if(!this.state.disclaimer) {
      errors.disclaimer = true;
      hasErrors = true;
    }

    this.setState({
      errors: Object.assign({ ...this.state.errors }, errors)
    });

    return !hasErrors;
  }


  onSubmit = () => {
    this.setState({
      showErrors: true
    });

    if (!this.validate()) {
      return;
    }

    // fetch("/.netlify/functions/contactform", {
    //   method: "post",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify({
    //     name: this.state.name,
    //     email: this.state.email,
    //     phone: this.state.phone,
    //     message: this.state.message
    //   })
    // }).then((response) => {
    //   if (response.ok) {
    //     this.setState({
    //       success: true
    //     });
    //   } else {
    //     throw new Error("Something went wrong!");
    //   }
    // }).catch(err => {
    //   this.setState({
    //     success: false
    //   });

    //   setTimeout(() => {
    //     this.setState({
    //       success: null
    //     });
    //   }, 3500)
    // })
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.props.submitFromOutside !== prevProps.submitFromOutside) {
      this.onSubmit();
    }
  }

  render() {
    const inlineStyle = {
      borderColor: 'red'
    }

    return (
      <div className="contact">
          <Form.Group>
            <Form.Control type="text" style={this.state.errors.firstname && this.state.showErrors ? inlineStyle : {}} placeholder="First Name *" onChange={ (e) => { this.updateField(e,'firstname') } } />
          </Form.Group>

          <Form.Group>
            <Form.Control type="text" style={this.state.errors.lastname && this.state.showErrors ? inlineStyle : {}} placeholder="Last Name *" onChange={ (e) => { this.updateField(e,'lastname') } } />
          </Form.Group>

          <Form.Group>
            <select id="provinces" class="form-control" style={this.state.errors.province && this.state.showErrors ? inlineStyle : {}} onChange={ (e) => { this.updateField(e,'province') } }>
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
            <Form.Control type="text" style={this.state.errors.email && this.state.showErrors ? inlineStyle : {}} placeholder="Email *" onChange={ (e) => { this.updateField(e,'email') } } />
          </Form.Group>

          <Form.Group>
            <label class="container-disclaimer">Disclaimer here
              <Form.Control type="checkbox" placeholder="Email" onChange={ (e) => { this.updateField(e,'disclaimer') } } />
              <span class="checkmark" style={this.state.errors.disclaimer && this.state.showErrors ? { color: 'red', border : '1px solid' } : {}}></span>
            </label>
          </Form.Group>
      </div>
    );
  }
}