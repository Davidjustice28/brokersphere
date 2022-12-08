import Header from "../header";
import Profile from "../reusable-elements/profile";
import "../../styles/profile.css"

function LoggedInUserProfile(props) {
    return (
        <div id="loggedin-userprofile">
            <Header leftIcon="arrow_back" pageName="Profile" rightIcon="edit" backFunc = {props.backFunc}/>
            <Profile photo ={props.user.Photo} h1 = {props.user.Name} h2={props.user.Username} p = {props.user.Bio} tags = {props.user.Tags} button = "FAVORITES" />
        </div>
    )
}

export default LoggedInUserProfile