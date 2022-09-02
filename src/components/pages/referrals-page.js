import { Component } from "react";
import Header from "../header";
import "../../styles/referral-page.css";

class ReferralPage extends Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        console.log(this.props.referrals)
        const referralArray = this.props.referrals
        return (
            <div>
                <Header leftIcon ="arrow_back" pageName="Referrals" backFunc ={this.props.backFunc}/>
                <h1>{referralArray.length} Available Referrals</h1>
                <div id = "referral-list">
                {referralArray.map((referral) => {
                    return (
                        <div className="referral">
                            <div>
                                <p>Agent: {referral.Agent}</p>
                                <p>Type: {referral.Type}</p>
                            </div>
                            <div>
                                <p>Location</p>
                                <p>{referral.Financing}</p>
                                <p>${referral.Budget}</p>
                            </div>
                        </div>
                    )
                })}
                </div>
            </div>
        )
    }
}

export default ReferralPage