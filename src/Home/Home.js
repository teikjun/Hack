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
                        placeholder="Name goes here"
                        aria-label="A hated name"
                    />
                    <InputGroup.Append>
                        <Button onClick={getInsult} variant="outline-primary">Click me!</Button>
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

function getInsult() {
    var client = new HttpClient();
    client.get("https://insult.mattbas.org/api/insult", function(response) {
        console.log(response);
    });
    alert('Hello!');
}


var HttpClient = function() {
    this.get = function(theUrl, callback) {
        var http_request;
        http_request = new XMLHttpRequest();
        http_request.onreadystatechange = function() {
            if (http_request.readyState === 4 && http_request.status === 200)
                callback(http_request.responseText);
        };
        http_request.open("GET", theUrl);
        http_request.withCredentials = true;
        http_request.setRequestHeader("Content-Type", "application/json");
        http_request.send({ "request": "authentication token" });
        // var xmlHttp = new XMLHttpRequest();
        // xmlHttp.onreadystatechange = function() { 
            // if (xmlHttp.readyState === 4 && xmlHttp.status === 200)
            //     callback(xmlHttp.responseText);
        // }
        // xmlHttp.open("GET", theUrl, true); // true for asynchronous 
        // xmlHttp.send(null);
    }
}
