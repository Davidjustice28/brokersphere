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
                    <div id="specialty-selection">
                        <label htmlFor="tag-select">Specialty:</label>
                        <select id="tag-select">
                            <option>Sellers</option>
                            <option>Buyers</option>
                            <option>Renters</option>
                            <option>Commercial</option>
                            <option>Land</option>
                            <option>Condos</option>
                            <option>Luxury</option>
                            <option>First-Timers</option>
                        </select>
                    </div>
                    <label htmlFor="state-input">State of License:</label>
                    <input type="text" id="state-input" placeholder="New Jersey, New York, Etc."></input>
                    <button type="button" onClick={this.props.searchFunc}><span className="material-symbols-outlined">search</span> SEARCH</button>

                </form>
            </div>
        )
    }
}

export default AgentSearchPage