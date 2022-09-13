
import Header from "../header";
import "../../styles/feed.css"

function Feed(props) {
    return (
        <div>
            <Header leftIcon ="arrow_back" pageName="Channels" backFunc ={props.backFunc}/>
        </div>
    )
}

export default Feed