import Image from "../images/titlelogo-transparent.PNG"
import "../../styles/login-page.css"


export default function LoginPage(props) {
    return (
        <div id="login-page">
            <img src={Image} alt="logo"></img>
            <h1>Login</h1>
            <form>
                <label htmlFor="email-login">Email</label>
                <input id="email-login" placeholder="Enter Email..."></input>
                <label htmlFor="password-login">Password</label>
                <input id="password-login" placeholder="Enter Password..."></input>
                <label>Reset Password</label>
                <button type="button" onClick={props.func}>Login</button>
            </form>
            <p onClick={this.props.func2}>JOIN BROKERSPHERE</p>
        </div>
    ) 
}
