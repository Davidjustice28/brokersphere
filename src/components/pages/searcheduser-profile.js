import "../../styles/searcheduser-profile.css";
import Header from "../header";
import Profile from "../reusable-elements/profile";

function SearchedUserProfile(props){
    return (
        <div id="searcheduser-page">
            <Header backFunc = {props.backFunc} pageName = "Agent Profile" leftIcon  = "arrow_back"/>
            <Profile h1={props.user.Name} h2={props.user.Username} p={props.user.Bio} photo={props.user.Photo} tags = {props.user.Tags} button ="ADD"/>
            <div className="searched-profile"></div>
        </div>
    )  
}

export default SearchedUserProfile