import { Component } from "react";
import Header from "../header";
import "../../styles/agentresults-page.css";

class AgentResultsPage extends Component{
    constructor(props) {
        super(props)
        this.state = {
            selectedUser: this.props.searcheduser
        }

    
    }
    render() {
        return (
            <div id="agentresults-page">
                <Header leftIcon ="arrow_back" pageName="Agent Results" backFunc ={this.props.backFunc}/>
                <div id="agentresults-div">
                    {this.props.users.map((user) => {
                        return (
                            <div className="result-div">
                                <img src = {user.Photo} alt="avatar"></img>
                                <div className="resultdiv-info">
                                    <p>@{user.Username}
                                        <br></br>
                                        {user.Bio}
                                    </p>
                                </div>
                                <span className="material-symbols-outlined" id ="profile-button" onClick={() => this.props.profileFunc(user)}>account_circle</span>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default AgentResultsPage