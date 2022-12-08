import React from "react";
import "../styles/header.css"

function DashboardHeader(props) {
    return (
        <div id="dashboard-header">
            <span></span>
            <img src = {props.image} alt ="logo" onClick={props.func2}></img>
            <span className="material-symbols-outlined" onClick={props.func}>feed</span>
        </div>
    )
}

export default DashboardHeader