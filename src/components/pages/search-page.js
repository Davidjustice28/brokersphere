import React, {useEffect} from "react";
import Header from "../header";
import "../../styles/search-page.css"

function AgentSearchPage(props){
    useEffect(() => {
        props.loadfunc()
    }, [])
    return (
        <div id="agentsearch-page">
            <Header leftIcon ="arrow_back" pageName="Agent Search" backFunc ={props.backFunc}/>
            <form>
                <label htmlFor="state-input">State of License:</label>
                <input type="text" id="state-input" placeholder="New Jersey, New York, Etc."></input>
                <button type="button" onClick={props.searchFunc}><span className="material-symbols-outlined">search</span> SEARCH</button>

            </form>
        </div>
    )
    
}

export default AgentSearchPage