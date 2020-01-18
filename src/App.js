import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from "./About/About.js";
import Home from "./Home/Home.js";

class App extends Component {
  render() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
            </Switch>
        </Router>
    )
  }
}

export default App;
