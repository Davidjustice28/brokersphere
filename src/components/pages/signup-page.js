import { Component } from "react";
import Image from "../images/titlelogo-transparent.PNG"
import "../../styles/signup-page.css"

class SignupPage extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div id="signup-page">
                <img src={Image} alt="logo"></img>
                <h1>Join the Ecosystem</h1>
                <form>
                    <label htmlFor="username-signup">Username</label>
                    <input id="username-signup" placeholder="Enter Desired Username"></input>
                    <label htmlFor="email-signup">Email</label>
                    <input id="email-signup" placeholder="Enter Email..."></input>
                    <label htmlFor="password-signup">Password</label>
                    <input id="password-signup" placeholder="Enter Password..."></input>
                    <label htmlFor="fullname-signup">Full Name</label>
                    <input id="fullname-signup" placeholder="Enter Full Name..."></input>
                    <label htmlFor= "bio-sign-up">Bio</label>
                    <input id="bio-signup" placeholder="Enter a short 1 line bio..."></input>
                    <button type="button" onClick={this.props.func1}>SIGNUP</button>
                </form>
                <p onClick={this.props.func2}>ALREADY HAVE AN ACCOUNT?</p>
            </div>
        )
    }
}

export default SignupPage