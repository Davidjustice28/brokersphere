import { Component } from "react";
import Header from "../header";

class ReferralPage extends Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        return (
            <div>
                <Header leftIcon ="arrow_back" pageName="Referrals" backFunc ={this.props.backFunc}/>
            </div>
        )
    }
}

export default ReferralPage