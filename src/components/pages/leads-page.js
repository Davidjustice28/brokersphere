import React, {useState} from "react"
import Header from "../header";
import "../../styles/lead-page.css"

export default function LeadPage(props) {
    const [detailspage, setDetailsPage] = useState(false)
    const [currentlead, setCurrentLead] = useState(null)
    function showDetails(choice) {
        if(detailspage === false) {
            setCurrentLead(choice)
            setDetailsPage(true)
        }else {
            setDetailsPage(false)
        }
    }

    if(detailspage === false) {
        return (
            <div>
                <Header leftIcon ="arrow_back" pageName="My Leads" backFunc ={props.backFunc}/>
                {props.leads.map((lead) => {
                    return (
                        <div className="lead-div">
                            <p>{lead.Name}</p>
                            <span className="material-symbols-outlined" onClick={() => showDetails(lead)}>assignment</span>
                        </div>
                    )
                })}
            </div>
        )
    }else {
        return (
            <div>
                <Header leftIcon ="arrow_back" pageName="My Leads" backFunc ={showDetails}/>
                <div id="lead-details">
                    <p>Lead Name: {currentlead.Name}</p>
                    <p>Desired Location: {currentlead.Location}</p>
                    <p>Budget: {currentlead.Budget}</p>
                    <p>Financing: {currentlead.Financing}</p>
                    <p>Lead Type: {currentlead.Type}</p>
                    <p>Email: {currentlead.Email}</p>
                    <p>Number: {currentlead.Number}</p>
                    <p>Referral Fee: {currentlead.Fee}%</p>
                    <p>Notes: {currentlead.Notes}</p>
                </div>
            </div>
        )
    }
}
