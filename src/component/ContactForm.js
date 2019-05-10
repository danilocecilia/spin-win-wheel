import React, { Component } from 'react';
import { Form, ButtonToolbar,  Button } from 'react-bootstrap';
import MyModal from './Modal';

export default class ContactForm extends Component {
  constructor(...args) {
    super(...args);

    this.state = { modalShow: false };
  }

  render() {
    let modalClose = () => this.setState({ modalShow: false });

    return (
      <ButtonToolbar>
        <Button
          variant="primary"
          onClick={() => this.setState({ modalShow: true })}
        >
          Launch vertically centered modal
        </Button>

        <MyModal
          show={this.state.modalShow}
          onHide={modalClose}
        />
      </ButtonToolbar>
    );
  }
}

      // <div className="contact">
      //   <form className="form">
      //       <Form.Group>
      //           <Form.Control type="text" placeholder="First Name" />
      //       </Form.Group>

      //       <Form.Group>
      //           <Form.Control type="text" placeholder="Last Name" />
      //       </Form.Group>

      //       <Form.Group>
      //           <Form.Control type="text" placeholder="Email" />
      //       </Form.Group>
      //   </form>
      // </div>
  //   )
  // }
//}
