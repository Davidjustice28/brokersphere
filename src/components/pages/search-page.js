import { Component } from "react";
import Header from "../header";
import "../../styles/search-page.css"

class AgentSearchPage extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div id="agentsearch-page">
                <Header leftIcon ="arrow_back" pageName="Agent Search" backFunc ={this.props.backFunc}/>
                <form>
                    <label htmlFor="agentsearch-input">Enter Name:</label>
                    <input id="agentsearch-input" type="text" placeholder="Example: Mark Zuckerburg"></input>
                    <button type="button" onClick={this.props.searchFunc}><span className="material-symbols-outlined">search</span> SEARCH</button>

                </form>
            </div>
        )
    }
}

export default AgentSearchPage