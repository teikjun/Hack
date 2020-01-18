import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from "./About/About.js";
import Homepage from "./Homepage/Homepage.js"

class App extends Component {
  render() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Homepage}/>
                <Route path="/about" component={About}/>
            </Switch>
        </Router>
    )
  }
}

export default App;
