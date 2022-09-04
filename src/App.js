import { Component } from "react";
import LoginPage from "./components/pages/login-page";
import Dashboard from "./components/dashboard";
import AboutScreen from "./components/about-screen";
import LoggedInUserProfile from "./components/pages/user-profile";
import AgentSearchPage from "./components/pages/search-page";
import LeadPage from "./components/pages/leads-page";
import ReferralPage from "./components/pages/referrals-page";
import ConversationPage from "./components/pages/conversations-page";
import NewReferralForm from "./components/pages/new-referralform";

class App extends Component {
  constructor() {
    super()
    this.state = {
      users: [
        {
          Name: "David Justice",
          Username: "officialdavidjustice",
          Password: "Jade2021!"
        },
        {
          Name: "Lina Justice",
          Username: "linajustice",
          Password: "Seattle2022!"
        }
      ],
      loggedIn:false,
      dashboard: true,
      aboutpage: false,
      userprofile: false,
      agentsearchpage: false,
      leadpage:false,
      referralpage:false,
      conversationpage: false,
      newreferralpage: false,
      referrals: [
        {
          Agent: "David Justice",
          Type: "Buyer",
          Location: "Cherry Hill",
          Financing: "FHA",
          Budget: 250000,
        },
        {
          Agent: "Ryan Serhant",
          Type: "Buyer",
          Location: "New York",
          Financing: "VA",
          Budget: 500000
        },
      ],

  
    }

    this.displayPage = this.displayPage.bind(this)
    this.displayAboutPage = this.displayAboutPage.bind(this)
    this.displayDashboard = this.displayDashboard.bind(this)
    this.displayMyProfile = this.displayMyProfile.bind(this)
    this.displayAgentSearchPage = this.displayAgentSearchPage.bind(this)
    this.displayLeadPage = this.displayLeadPage.bind(this)
    this.displayReferralPage = this.displayReferralPage.bind(this)
    this.displayConversationPage = this.displayConversationPage.bind(this)
    this.displayNewreferralPage = this.displayNewreferralPage.bind(this)
    this.createReferral = this.createReferral.bind(this)
    this.loginUser = this.loginUser.bind(this)
    this.logoutUser = this.logoutUser.bind(this)
  }

  displayPage(page) {
    console.log(`the current page should be ${page}`)
    this.setState({currentPage: page})
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
  
  displayNewreferralPage() {
    console.log("New referral page button is working")
    this.setState({newreferralpage: true, conversationpage:false, referralpage:false, leadpage: false, agentsearchpage: false, aboutpage: false, dashboard: false, userprofile:false})
  }

  createReferral() {
    if(!(document.getElementById("agent-input").innerText == null)) {
      this.setState({referrals: this.state.referrals.concat({
        Agent: document.getElementById("agent-input").value,
        Type: document.getElementById("type-input").value,
        Location: document.getElementById("location-input").value,
        Financing: document.getElementById("financing-input").value,
        Budget: document.getElementById("budget-input").value
      }) })
      this.displayReferralPage()
    }else {
      return
   }
  }

  loginUser() {
    this.setState({loggedIn:true})
  }

  logoutUser() {
    this.setState({loggedIn:false})
  }

  render() {
      console.log(this.state.users)
      if(this.state.loggedIn === false) {
        return <LoginPage func = {this.loginUser}/>
      }else {
      if(this.state.dashboard  === true) {
        return <Dashboard aboutFunc = {this.displayAboutPage} profileFunc ={this.displayMyProfile} searchFunc = {this.displayAgentSearchPage} leadFunc = {this.displayLeadPage} referralFunc ={this.displayReferralPage} conversationFunc = {this.displayConversationPage} logout = {this.logoutUser}/>
      }
      else if(this.state.aboutpage === true) {
        return <AboutScreen backFunc = {this.displayDashboard}/>
      }
      else if(this.state.userprofile === true) {
        return <LoggedInUserProfile backFunc = {this.displayDashboard}/>
      }
      else if(this.state.agentsearchpage === true) {
        return <AgentSearchPage backFunc = {this.displayDashboard}/>
      }
      else if(this.state.leadpage === true) {
        return <LeadPage backFunc = {this.displayDashboard}/>
      }
      else if(this.state.referralpage === true) {
        return <ReferralPage backFunc = {this.displayDashboard} referrals = {this.state.referrals} addFunc = {this.displayNewreferralPage}/>
      }
      else if(this.state.conversationpage === true) {
        return <ConversationPage backFunc = {this.displayDashboard}/>
      }
      else if(this.state.newreferralpage === true) {
        return <NewReferralForm backFunc = {this.displayReferralPage} createFunc = {this.createReferral}/>
      }
  }
  }
}

export default App