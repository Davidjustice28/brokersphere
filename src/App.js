import { Component } from "react";
import Dashboard from "./components/dashboard";
import AboutScreen from "./components/about-screen";
import LoggedInUserProfile from "./components/pages/user-profile";
import AgentSearchPage from "./components/pages/search-page";
import LeadPage from "./components/pages/leads-page";
import ReferralPage from "./components/pages/referrals-page";
import ConversationPage from "./components/pages/conversations-page";

class App extends Component {
  constructor() {
    super()
    this.state = {
      dashboard: true,
      aboutpage: false,
      userprofile: false,
      agentsearchpage: false,
      leadpage:false,
      referralpage:false,
      conversationpage: false
    }
    this.displayAboutPage = this.displayAboutPage.bind(this)
    this.displayDashboard = this.displayDashboard.bind(this)
    this.displayMyProfile = this.displayMyProfile.bind(this)
    this.displayAgentSearchPage = this.displayAgentSearchPage.bind(this)
    this.displayLeadPage = this.displayLeadPage.bind(this)
    this.displayReferralPage = this.displayReferralPage.bind(this)
    this.displayConversationPage = this.displayConversationPage.bind(this)
  }

  displayAboutPage() {
    console.log("About page button is working")
    this.setState({aboutpage: true, userprofile: false, dashboard: false})
  }

  displayDashboard() {
    console.log("Back button is working")
    this.setState({aboutpage:false, userprofile:false, dashboard:true})
  }
  displayMyProfile() {
    console.log("Profile button is working")
    this.setState({aboutpage:false, dashboard: false, userprofile: true})
  }

  displayAgentSearchPage() {
    console.log("Agent search button is working")
    this.setState({agentsearchpage: true, aboutpage: false, dashboard: false, userprofile:false})
  }

  displayLeadPage() {
    console.log("Lead Page button is working")
    this.setState({leadpage: true, agentsearchpage: false, aboutpage: false, dashboard: false, userprofile:false})
  }

  displayReferralPage() {
    console.log("Referral page button is working")
    this.setState({referralpage:true, leadpage: false, agentsearchpage: false, aboutpage: false, dashboard: false, userprofile:false})
  }
  displayConversationPage() {
    console.log("Conversation page button is working")
    this.setState({conversationpage:true, referralpage:false, leadpage: false, agentsearchpage: false, aboutpage: false, dashboard: false, userprofile:false})
  }

  render() {
      if(this.state.dashboard  === true) {
        return <Dashboard aboutFunc = {this.displayAboutPage} profileFunc ={this.displayMyProfile} searchFunc = {this.displayAgentSearchPage} leadFunc = {this.displayLeadPage} referralFunc ={this.displayReferralPage} conversationFunc = {this.displayConversationPage}/>
      }
      if(this.state.aboutpage === true) {
        return <AboutScreen backFunc = {this.displayDashboard}/>
      }
      if(this.state.userprofile === true) {
        return <LoggedInUserProfile backFunc = {this.displayDashboard}/>
      }
      if(this.state.agentsearchpage === true) {
        return <AgentSearchPage backFunc = {this.displayDashboard}/>
      }
      if(this.state.leadpage === true) {
        return <LeadPage backFunc = {this.displayDashboard}/>
      }
      if(this.state.referralpage === true) {
        return <ReferralPage backFunc = {this.displayDashboard}/>
      }
      if(this.state.conversationpage === true) {
        return <ConversationPage backFunc = {this.displayDashboard}/>
      }
  }
}

export default App