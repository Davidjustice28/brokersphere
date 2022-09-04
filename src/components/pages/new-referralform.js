import Header from "../header";
import { Component } from "react";
import "../../styles/new-referralform.css"
class NewReferralForm extends Component {
    constructor() {
        super()
        this.state = {}
    }
    
    render() {

        return (
            <div id="referral-formdiv">
                <Header leftIcon ="arrow_back" pageName="Referral Form" backFunc ={this.props.backFunc}/>
                <div id = "new-referral">
                    <form>
                        <label htmlFor="agent-input">Sending Agent</label>
                        <input type="text" id="agent-input"></input>
                        <label htmlFor="type-input">Type</label>
                        <input type="text" id="type-input"></input>
                        <label htmlFor="location-input">Location</label>
                        <input type="text" id="location-input"></input>
                        <label htmlFor="financing-input">Financing</label>
                        <input type="text" id="financing-input"></input>
                        <label htmlFor="budget-input">Budget</label>
                        <input type="number" id="budget-input"></input>
                        <button onClick={this.props.createFunc} type= "button">Create Referral</button>
                    </form>

                </div>
            </div>
        )
    }
}

export default NewReferralForm