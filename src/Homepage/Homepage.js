import React, {Component} from "react";
import Body from "../Body/Body.js";
import Navi from "../Navi/Navi.js";

class Homepage extends Component {
    render() {
        return (
            <div class="min-vh-100">
                <Navi/>
                <Body/>
            </div>
        )
    }
}

export default Homepage;
