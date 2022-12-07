import { Component } from "react";
import Header from "../header";
import "../../styles/search-page.css"

class AgentSearchPage extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    
    componentDidMount() {
        this.props.loadfunc()
    }
    render() {
        return (
            <div id="agentsearch-page">
                <Header leftIcon ="arrow_back" pageName="Agent Search" backFunc ={this.props.backFunc}/>
                <form>
                    <label htmlFor="state-input">State of License:</label>
                    <input type="text" id="state-input" placeholder="New Jersey, New York, Etc."></input>
                    <button type="button" onClick={this.props.searchFunc}><span className="material-symbols-outlined">search</span> SEARCH</button>

                </form>
            </div>
        )
    }
}

export default AgentSearchPage