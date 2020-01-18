import React from 'react';
import './Home.css';
import emoji from './emoji.svg';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

class Home extends React.Component {
    render() {
        return (
            <div className="container d-flex flex-column justify-content-center align-items-center">
                <img className="emoji" src={emoji} alt=""/>
                <InputGroup className="m-3">
                    <FormControl
                        placeholder="Recipient's username"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                        <Button variant="outline-secondary">Button</Button>
                    </InputGroup.Append>
                </InputGroup>
                <Alert variant="dark">
                    <span>Your Mom</span>
                </Alert>
            </div>
        )
    }
}

export default Home;
