import { Component } from "react";
import Header from "../header";
import "../../styles/conversation-page.css";

class ConversationPage extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div>
                <Header leftIcon ="arrow_back" pageName="Trending News" backFunc ={this.props.backFunc}/>
                <div id="articles-div">
                {this.props.articles.map(article => {
                    return (
                        <div className="article">
                            <h1>{article.source.name}</h1>
                            <img src={article.urlToImage} alt="Empty"></img>
                            <h2>{article.title}</h2>
                            <p>{article.content}</p>
                            <a href={article.url}>Click to read full article</a>
                        </div>
                    )
                })}
                </div>
            </div>
        )
    }
}

export default ConversationPage