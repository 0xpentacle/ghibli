import React, {Component} from "react"
import {Link} from "react-router-dom";

class Footer extends Component {
    render() {
        return <footer>
            <article className={"footer-content flex-group space-between flex-align-center"}>
                <div>© {new Date().getFullYear()} Pentacle
                    <a href={"https://github.com/pentacleai"} target={"_blank"} rel="noopener noreferrer">GitHub</a>
                    <a href={"https://pentacle.substack.com/"} target={"_blank"} rel="noopener noreferrer">Substack</a>
                    <a href={"https://twitter.com/pentacleai"} target={"_blank"} rel="noopener noreferrer">Twitter</a>
                </div>
                <div>
                    <Link to="/terms">Terms</Link>
                    <a href={"https://etherscan.io/address/pentacle.eth"} target={"_blank"} rel="noopener noreferrer">Donate pentacle.eth</a>
                </div>
            </article>
        </footer>
    }
}

export default Footer
