import Header from "../header";
import "../../styles/listings-page.css";

function ListingsPage(props) {
    console.log(props.index)
    return (
        <div id="listings-page">
            <Header leftIcon ="arrow_back" pageName="Listings" backFunc ={props.backFunc}/>
            <div id="listing-display">
                <img src = {props.listings[props.index].img}alt="alt"></img>
                <h1>{props.listings[props.index].address}</h1>
                <div id="listings-div2">
                    <div id="dislike-div">
                        <span>{props.listings[props.index].dislikes}</span>
                        <span className="material-symbols-outlined" onClick={() => props.likefunc(props.index, "dislike")}>thumb_down</span>
                    </div>
                    <h2>${props.listings[props.index].price}</h2>
                    <div id="like-div">
                        <span className="material-symbols-outlined" onClick={() => props.likefunc(props.index, "like")}>favorite</span>
                        <span>{props.listings[props.index].likes}</span>
                    </div>
                    
                </div>
                
                <div id="listing-div1">
                    <p>{props.listings[props.index].bedrooms} Beds</p>
                    <p>{props.listings[props.index].bathrooms} Baths</p>
                    <p>{props.listings[props.index].squarefeet} Sq.Ft</p>
                </div>
            </div>
            <div id="listing-buttons">
                <span className="material-symbols-outlined" onClick={props.reverse}>arrow_back</span>
                <span className="material-symbols-outlined" onClick={props.forward}>arrow_forward</span>
            </div>
        </div>
    )
}

export default ListingsPage