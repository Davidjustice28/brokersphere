import React from "react";
import DashboardHeader from "./dashboard-header";
import "../styles/dashboard.css"
import photo from "../components/images/main-logo.PNG"



function  Dashboard(props) {
    return (
        <div id="dashboard">
            <DashboardHeader image = {photo} func ={props.feedFunc} func2 = {props.listingsFunc}/>
            <div id="dash-title" >
                <h1>Dashboard</h1>
            </div>
            <div id="dashbuttons-div">
                <button onClick={props.profileFunc}>MY PROFILE</button>
                <button onClick={props.searchFunc}>AGENT SEARCH</button>
                <button onClick={props.referralFunc}>REFERRALS</button>
                <button onClick={props.aboutFunc}>ABOUT US</button>
                <button onClick={props.leadFunc}>LEADS</button>
                <button id="logout-button" onClick={props.logout}>Log Out</button>
            </div>
        </div>
    ) 
}
export default Dashboard