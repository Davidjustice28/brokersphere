import React from "react";
import { Component } from "react";
import "../styles/header.css"

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className="header">
                <span className="material-symbols-outlined" onClick={this.props.backFunc}>{this.props.leftIcon}</span>
                <h1>{this.props.pageName}</h1>
                <span className="material-symbols-outlined">{this.props.rightIcon}</span>

            </div>
        )
    }
}

export default Header