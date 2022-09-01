import { Component } from "react";
import Header from "../header";

class AgentSearchPage extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div id="agentsearch-page">
                <Header leftIcon ="arrow_back" pageName="Search" backFunc ={this.props.backFunc}/>
            </div>
        )
    }
}

export default AgentSearchPage