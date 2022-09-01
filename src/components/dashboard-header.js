import { Component } from "react";
import React from "react";
import "../styles/header.css"

class DashboardHeader extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div id="dashboard-header">
                <span></span>
                <img src = {this.props.image} alt ="logo"></img>
                <span className="material-symbols-outlined" onClick={this.props.func}>mail</span>
            </div>
        )
    }
}

export default DashboardHeader