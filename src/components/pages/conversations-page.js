import { Component } from "react";
import Header from "../header";

class ConversationPage extends Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        return (
            <div>
                <Header leftIcon ="arrow_back" pageName="Conversations" backFunc ={this.props.backFunc}/>
            </div>
        )
    }
}

export default ConversationPage