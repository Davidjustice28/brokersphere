import { Component } from "react";
import "../../styles/profile.css"


class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className="profile-page">
                <div className="profileinfo-div">
                    <img id="profilepage-avatar" src={this.props.photo} alt="avater"></img>
                    <h1>{this.props.h1}</h1>
                    <h2>@{this.props.h2}</h2>
                    <p>{this.props.p}</p>
                    <div className="my-tags">
                        {this.props.tags.map((tag) => {
                            return (
                                <button>{tag}</button>
                            )
                        })}
                    </div>
                    <button id ="searcheduser-button">{this.props.button}</button>
                </div>
                
            </div>
        )
    }
}
export default Profile