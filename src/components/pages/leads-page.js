import { Component } from "react";
import Header from "../header";
import "../../styles/lead-page.css"

class LeadPage extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div>
                <Header leftIcon ="arrow_back" pageName="My Leads" backFunc ={this.props.backFunc}/>
            </div>
        )
    }
}

export default LeadPage