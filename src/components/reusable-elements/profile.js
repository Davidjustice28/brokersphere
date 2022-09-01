import { Component } from "react";
import "../../styles/profile.css"
import Avater from "../images/david-justice.jpg"

class Profile extends Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        return (
            <div className="profile-page">
                <div className="profileinfo-div">
                    <img id="profilepage-avatar" src={Avater}></img>
                    <h1>David Justice</h1>
                    <h2>@officialdavidjustice</h2>
                    <p>NJ Realtor and Founder of Brokersphere</p>
                    <button>FAVORITES</button>
                </div>
                
            </div>
        )
    }
}
export default Profile