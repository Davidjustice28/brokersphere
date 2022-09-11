import { useState} from "react";
import Header from "../header";
import "../../styles/feed.css"

function Feed(props) {
    const [page, setPage] = useState("Channels")
    const [channels, setChannels] = useState([{title:"Introductions", comments:[{text:"Hi I am David Justice", author: "Ryan Serhant"}]}, {title: "New Jersey", comments: [{text:"I love New Jersey!", author: "Barbara Corcoran"}]}])
    function addComment() {
        setPage({comments: [...page.comments, {
            text: "new comment",
            author: props.user.Name
        }]})
        setTimeout(() => {
            console.log(page)
        }, 500)
    }
    if(page === "Channels") {
        return (
            <div>
                <Header leftIcon ="arrow_back" pageName="Word Around Town" backFunc ={props.backFunc}/>
                <div id="channels-div">
                    {channels.map((c) => {
                        return (
                            <div className="channel">
                                <h1>{c.title}</h1>
                                <span>{c.comments.length} comments</span>
                                <button onClick={
                                    () => {
                                        setPage(c)
                                    }
                            }>Tap In</button>
                            </div>
                        )
                    })}  
                </div>
            </div>
        )
    }
    else {
        return (
            <div id="channel-feed">
                <Header leftIcon ="arrow_back" pageName="Word Around Town" backFunc ={() => setPage("Channels")}/>
                <div id="new-comment">
                    <input type="text" id="comment-text" className="example"></input>
                    <button type = "button" onClick={addComment}>Send</button>
                </div>
                {page.comments.map((c) => {
                    return ( 
                        <div className="comment-div">
                            <p>"{c.text}"</p>
                            <p><i>{c.author}</i></p>
                        </div>
                    )
                })}
            </div>
        )
    }        
}

export default Feed