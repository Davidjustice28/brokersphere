import { Component } from "react";
import "../../styles/searcheduser-profile.css";
import Header from "../header";
import Profile from "../reusable-elements/profile";

class SearchedUserProfile extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }

    
    render() {
        
        return (
            <div id="searcheduser-page">
                <Header backFunc = {this.props.backFunc} pageName = "Agent Profile" leftIcon  = "arrow_back"/>
                <Profile h1={this.props.user.Name} h2={this.props.user.Username} p={this.props.user.Bio} photo={this.props.user.Photo} tags = {this.props.user.Tags} button ="ADD"/>
                <div className="searched-profile">
                    
                </div>

            </div>
        )
    }
}

export default SearchedUserProfile