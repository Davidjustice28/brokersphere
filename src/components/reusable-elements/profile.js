import { Component } from "react";
import "../../styles/profile.css"


function Profile(props) {
    return (
        <div className="profile-page">
            <div className="profileinfo-div">
                <img id="profilepage-avatar" src={props.photo} alt="avater"></img>
                <h1>{props.h1}</h1>
                <h2>@{props.h2}</h2>
                <p>{props.p}</p>
                <div className="my-tags">
                    {props.tags.map((tag) => {
                        return (
                            <button>{tag}</button>
                        )
                    })}
                </div>
                <button id ="searcheduser-button">{props.button}</button>
            </div> 
        </div>
    ) 
}
export default Profile