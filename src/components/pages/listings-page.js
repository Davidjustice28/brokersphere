import Header from "../header";
import "../../styles/listings-page.css";

function ListingsPage(props) {
    console.log(props.index)
    function displayCommentInput() {
        if (document.getElementById("new-commentdiv").style.display === "none") {
            document.getElementById("new-commentdiv").style.display = "flex"
        } else {
            document.getElementById("new-commentdiv").style.display = "none"
        }
    }

    function displayAllInfo() {
        if (document.getElementById("listing-display").style.display === "none") {
            document.getElementById("listing-display").style.display = "block"
            document.getElementById("listing-buttons").style.display = "flex"
            document.getElementById("listings-comments").style.display = "flex"
            document.getElementById("moreinfo-div").style.display = "none"
            document.getElementById("lessinfo-button").style.display = "none"
            document.getElementById("header-lefticon").style.opacity = "1.0"
        } else {
            document.getElementById("moreinfo-div").style.display = "block"
            document.getElementById("lessinfo-button").style.display = "inline"
            document.getElementById("header-lefticon").style.opacity = "0"
            document.getElementById("listing-display").style.display = "none"
            document.getElementById("listing-buttons").style.display = "none"
            document.getElementById("listings-comments").style.display = "none"

        }
    }



    return (
        <div id="listings-page">
            <Header leftIcon="arrow_back" rightIcon="add_comment" pageName="Listings" backFunc={props.backFunc} rightFunc={displayCommentInput} />
            <div id="new-commentdiv">
                <textarea type="text" id="comment-input" maxLength="60" rows="2"></textarea>
                <button id="comment-button" type="button" onClick={() => props.commentFunc(props.listings[props.index])}>Comment</button>
            </div>
            <div id="moreinfo-div">
                <p>Address - {props.listings[props.index].address}</p>
                <p>Bedrooms-{props.listings[props.index].bedrooms}</p>
                <p>Bathrooms - {props.listings[props.index].bathrooms}</p>
                <p>Price - ${props.listings[props.index].price}</p>
                <p>Sqft - {props.listings[props.index].squarefeet}</p>
                <p>Taxes - ${props.listings[props.index].taxes}</p>
                <p>Condition- {props.listings[props.index].condition}</p>
                <p>Listing Agent - {props.listings[props.index].agent}</p>
                <p>Website Link - <a href={props.listings[props.index].website}>{props.listings[props.index].website}</a></p>
            </div>
            <button id="lessinfo-button" type="button" onClick={displayAllInfo}>Less Info</button>
            <div id="listing-display">
                <img src={props.listings[props.index].img} alt="alt"></img>
                <h1 id="listing-h1" onClick={displayAllInfo}>{props.listings[props.index].address}</h1>
                <div id="listings-div2">
                    <div id="dislike-div">
                        <span>{props.listings[props.index].dislikes}</span>
                        <span className="material-symbols-outlined" id="dislike-span" onClick={() => props.likefunc(props.index, "dislike")}>thumb_down</span>
                    </div>
                    <h2>${props.listings[props.index].price}</h2>
                    <div id="like-div">
                        <span className="material-symbols-outlined" id="favorite-span" onClick={() => props.likefunc(props.index, "like")}>favorite</span>
                        <span>{props.listings[props.index].likes}</span>
                    </div>

                </div>

                <div id="listing-div1" onClick={displayAllInfo}>
                    <p>{props.listings[props.index].bedrooms} Beds</p>
                    <p>{props.listings[props.index].bathrooms} Baths</p>
                    <p>{props.listings[props.index].squarefeet} Sq.Ft</p>
                </div>
            </div>
            <div id="listing-buttons">
                <span className="material-symbols-outlined" onClick={props.reverse}>arrow_back</span>
                <span className="material-symbols-outlined" onClick={props.forward}>arrow_forward</span>
            </div>
            <div id="listings-comments">
                {props.listings[props.index].comments.map((comment) => {
                    return (
                        <div className="listing-comment">
                            <h1>"{comment.message}"</h1>
                            <p>{comment.sender}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ListingsPage