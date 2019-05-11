import React, { Component } from 'react'
import { ButtonToolbar, Button } from 'react-bootstrap';

export default class AgeVerification extends Component {
    render() {
        const style = {
            marginRight: '3%'
        }

        return (
            <div>
                <ButtonToolbar className="d-flex justify-content-end" >
                    <Button style={style} variant="success" onClick={() => this.props.handleClick(true)}>YES, I'm 19+</Button>
                    <Button variant="outline-dark" onClick={() => this.props.handleClick(false)}>No, I'm underage</Button>
                </ButtonToolbar>
            </div>
        )
    }
}
