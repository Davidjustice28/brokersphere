import { Component } from "react";
import Header from "../header";
import "../../styles/lead-page.css"

class LeadPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            detailspage:false,
            currentlead: null
        }
        this.showDetails = this.showDetails.bind(this)
    }

    showDetails(choice) {
        if(this.state.detailspage === false) {
            this.setState({currentlead:choice})
            this.setState({detailspage: true})
        }else {
            this.setState({detailspage:false})
        }
    }

    render() {
        if(this.state.detailspage === false) {
            return (
                <div>
                    <Header leftIcon ="arrow_back" pageName="My Leads" backFunc ={this.props.backFunc}/>
                    {this.props.leads.map((lead) => {
                        return (
                            <div className="lead-div">
                                <p>{lead.Name}</p>
                                <span className="material-symbols-outlined" onClick={() => this.showDetails(lead)}>assignment</span>
                            </div>
                        )
                    })}
                </div>
            )
        }else {
            return (
                <div>
                    <Header leftIcon ="arrow_back" pageName="My Leads" backFunc ={this.showDetails}/>
                    <div id="lead-details">
                        <p>Lead Name: {this.state.currentlead.Name}</p>
                        <p>Desired Location: {this.state.currentlead.Location}</p>
                        <p>Budget: {this.state.currentlead.Budget}</p>
                        <p>Financing: {this.state.currentlead.Financing}</p>
                        <p>Lead Type: {this.state.currentlead.Type}</p>
                        <p>Email: {this.state.currentlead.Email}</p>
                        <p>Number: {this.state.currentlead.Number}</p>
                        <p>Referral Fee: {this.state.currentlead.Fee}%</p>
                        <p>Notes: {this.state.currentlead.Notes}</p>
                    </div>
                </div>
            )
        }
    }
}

export default LeadPage