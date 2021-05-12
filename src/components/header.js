import React, {Component} from "react"
import {Link} from "react-router-dom";
import Navigation from "./navigation";

class Header extends Component {
    render() {
        return <header>
            <div className="header-content flex-justify-center">
                <h1>Studio Ghibli gif enjoyers</h1>
            </div>
        </header>
    }
}

export default Header
