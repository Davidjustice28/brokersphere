import { Component } from "react";
import Header from "../header";
import Profile from "../reusable-elements/profile";
import "../../styles/profile.css"

class LoggedInUserProfile extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div id="loggedin-userprofile">
                <Header leftIcon="arrow_back" pageName="Profile" rightIcon="edit" backFunc = {this.props.backFunc}/>
                <Profile photo ={this.props.user.Photo} h1 = {this.props.user.Name} h2={this.props.user.Username} p = {this.props.user.Bio} tags = {this.props.user.Tags} button = "FAVORITES" />
            </div>
        )
    }
}

export default LoggedInUserProfile