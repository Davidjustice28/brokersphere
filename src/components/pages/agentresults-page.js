import React, {useState} from "react";
import Header from "../header";
import "../../styles/agentresults-page.css";

export default function AgentResultsPage(props) {
    const [selectedUser, setSelectedUser] = useState(props.searcheduser)

    return (
        <div id="agentresults-page">
            <Header leftIcon ="arrow_back" pageName="Agent Results" backFunc ={props.backFunc}/>
            <div id="agentresults-div">
                {props.users.map((user) => {
                    return (
                        <div className="result-div">
                            <img src = {user.Photo} alt="avatar"></img>
                            <div className="resultdiv-info">
                                <p>@{user.Username}
                                    <br></br>
                                    {user.Bio}
                                </p>
                            </div>
                            <span className="material-symbols-outlined" id ="profile-button" onClick={() => props.profileFunc(user)}>account_circle</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}