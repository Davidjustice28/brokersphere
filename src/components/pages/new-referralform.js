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
                        <label htmlFor="name-input">Client Name</label>
                        <input type="text" id="name-input"></input>
                        <label htmlFor="type-input">Lead Type</label>
                        <input type="text" id="type-input"></input>
                        <label htmlFor="location-input">Location of Interest</label>
                        <input type="text" id="location-input"></input>
                        <label htmlFor="financing-input">Financing</label>
                        <input type="text" id="financing-input"></input>
                        <label htmlFor="budget-input">Budget</label>
                        <input type="number" id="budget-input"></input>
                        <label htmlFor="number-input">Phone Number</label>
                        <input type="text" id="number-input"></input>
                        <label htmlFor="email-input">Email Address</label>
                        <input type="text" id="email-input"></input>
                        <label htmlFor="fee-input">Referral Fee %</label>
                        <input type="number" id="fee-input"></input>
                        <label htmlFor="notes-input">Notes</label>
                        <input type="text" id="notes-input"></input>
                        <button onClick={this.props.createFunc} type= "button">Create Referral</button>
                    </form>

                </div>
            </div>
        )
    }
}

export default NewReferralForm