import React from 'react';
import './Body.css';
import emoji from './emoji.svg';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

class Body extends React.Component {
    render() {
        return (
            <div className="container d-flex flex-column justify-content-center align-items-center min-vh-100">
                <img className="emoji" src={emoji} alt=""/>
                <InputGroup className="m-5">
                    <FormControl
                        placeholder="Name goes here"
                        aria-label="A hated name"
                    />
                    <InputGroup.Append>
                        <Button variant="outline-primary">Click me!</Button>
                    </InputGroup.Append>
                </InputGroup>
                <Alert variant="dark">
                    <span>Your Mom</span>
                </Alert>
            </div>
        )
    }
}

export default Body;
