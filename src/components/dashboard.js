import React from "react";
import { Component } from "react";
import DashboardHeader from "./dashboard-header";
import "../styles/dashboard.css"
import photo from "../components/images/main-logo.PNG"



class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div id="dashboard">
                <DashboardHeader image = {photo} func ={this.props.conversationFunc}/>
                <div id="dash-title" >
                    <h1>Dashboard</h1>
                </div>
                <div id="dashbuttons-div">
                    <button onClick={this.props.profileFunc}>MY PROFILE</button>
                    <button onClick={this.props.searchFunc}>AGENT SEARCH</button>
                    <button onClick={this.props.referralFunc}>REFERRALS</button>
                    <button onClick={this.props.aboutFunc}>ABOUT US</button>
                    <button onClick={this.props.leadFunc}>LEADS</button>
                </div>
                <footer>
                    <p onClick={this.props.logout}>Log Out</p>
                </footer>
            </div>
        )
    }
}
export default Dashboard