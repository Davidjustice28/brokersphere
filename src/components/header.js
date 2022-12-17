import React from "react";
import "../styles/header.css"

function Header(props) { 
    return (
        <div className="header">
            <span className="material-symbols-outlined" onClick={props.backFunc} id="header-lefticon">{props.leftIcon}</span>
            <h1>{props.pageName}</h1>
            <span className="material-symbols-outlined" onClick={props.rightFunc}>{props.rightIcon}</span>
        </div>
    )   
}

export default Header