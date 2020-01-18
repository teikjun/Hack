import React from 'react';
import './Body.css';
import emoji from './emoji.svg';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { bounce } from 'react-animations';
import styled, { keyframes } from 'styled-components';

const Bounce = styled.div`animation: 2s ${keyframes`${bounce}`} infinite`;

class Body extends React.Component {
    render() {
        return (
            <div className="container d-flex flex-column justify-content-center align-items-center min-vh-100">
                <Bounce><img className="emoji" src={emoji} alt=""/></Bounce>
                <InputGroup className="m-5">
                    <FormControl
                        placeholder="Name goes here"
                        aria-label="A hated name"
                    />
                    <InputGroup.Append>
                        <Button variant="primary">Click me!</Button>
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
