import React from 'react';
import './Body.css';
import emoji from './emoji.svg';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import styled, { keyframes } from 'styled-components';
import { bounce } from 'react-animations';
const Bounce = styled.div`animation: 2s ${keyframes`${bounce}`} infinite`;

class Home extends React.Component {
    state = {
        name: "You",
    };

    handleChange = event => {
        this.setState({ name: event.target.value });
    };

    getInsult = () => { 
        var client = new HttpClient();
        client.get("https://insult.mattbas.org/api/insult", (response) => {
            response = " is".concat(response.substr(7));
            response = this.state.name.concat(response);
            document.getElementById("response").innerHTML = response;
        });
    }
    
    render() {
        return (
            <div className="container d-flex flex-column justify-content-center align-items-center vh-100">
                <Bounce><img className="emoji" src={emoji} alt=""/></Bounce>
                <InputGroup className="m-3">
                    <FormControl onChange={this.handleChange}
                        placeholder="Name goes here"
                        aria-label="A hated name"
                    />
                    <InputGroup.Append>
                        <Button onClick={this.getInsult} variant="primary">Click me!</Button>
                    </InputGroup.Append>
                </InputGroup>
                <Alert variant="dark">
                    <h1 id="response">Prepare some tissues</h1>
                </Alert>
            </div>
        )
    };
}

export default Home;

var HttpClient = function() {
    this.get = function(theUrl, callback) {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function() { 
            if (xmlHttp.readyState === 4 && xmlHttp.status === 200)
                callback(xmlHttp.responseText);
        }
        xmlHttp.open("GET", theUrl, true); // true for asynchronous 
        xmlHttp.send(null);
    }
}
