import { Component } from "react";
import LoginPage from "./components/pages/login-page";
import Dashboard from "./components/dashboard";
import AboutScreen from "./components/about-screen";
import LoggedInUserProfile from "./components/pages/user-profile";
import AgentSearchPage from "./components/pages/search-page";
import LeadPage from "./components/pages/leads-page";
import ReferralPage from "./components/pages/referrals-page";
import NewReferralForm from "./components/pages/new-referralform";
import AgentResultsPage from "./components/pages/agentresults-page";
import SearchedUserProfile from "./components/pages/searcheduser-profile";
import Feed from "./components/pages/feed";
import ListingsPage from "./components/pages/listings-page";
import SignupPage from "./components/pages/signup-page";
import Photo1 from "./components/images/david-justice.jpg";
import Photo2 from "./components/images/IMG_1049.jpg";
import Photo3 from "./components/images/IMG_3396.jpg"
import LittlemillPhoto from "../src/components/images/852littlemill.JPG";
import HiddenPhoto from "../src/components/images/121hidden.jpg";

class App extends Component {
  constructor() {
    super()
    this.state = {
      users: [
        {
          Name: "David Justice",
          Username: "officialdavidjustice",
          Email: "example@email.com",
          Password: "Jade2021!",
          Photo: Photo1,
          Bio: "NJ Realtor and Founder of Brokersphere",
          State: "Delaware",
          Tags: ["Buyers",  "Condos", "Sellers"],
          Leads: []
        },
        {
          Name: "Jade Justice",
          Username: "darthsidious",
          Email: "jade@email.com",
          Password: "Ui6az4mp!!",
          Photo: Photo2,
          Bio: "I love cheese curls and mac & cheese!",
          State: "New Jersey",
          Tags: ["Commercial", "Land", "Sellers"],
          Leads: []
        },
        {
          Name: "Lina Justice",
          Username: "wifey2019",
          Email: "lina@email.com",
          Password: "password123",
          Photo: Photo3,
          Bio: "Founder of Astitch and ruler of the 9 realms",
          State: "Washington",
          Tags: ["Luxury", "Renters", "Buyers"],
          Leads: []
        }
      ],
      loggedIn:false,
      dashboard: true,
      aboutpage: false,
      userprofile: false,
      agentsearchpage: false,
      leadpage:false,
      referralpage:false,
      agentresultspage: false,
      newreferralpage: false,
      searcheduserprofile: false,
      searcheduser:null,
      signuppage: false,
      feedpage:false,
      listingspage: false,
      referrals: [
        {
          Agent: "David Justice",
          Type: "Buyer",
          Location: "Cherry Hill",
          Financing: "FHA",
          Budget: "250,000",
          Name: "Alisha Foster",
          Email: "lyricskyy@gmail.com",
          Number: "123-456-7890",
          Notes: "Is looking for a townhouse with easy access to route 70",
          Fee: 25
        },
        {
          Agent: "Ryan Serhant",
          Type: "Buyer",
          Location: "New York",
          Financing: "VA",
          Budget: "500,000",
          Name: "Johnny Depp",
          Email: "captainsparrow@email.com",
          Number: "098-765-4321",
          Notes: "Wants the nicest high-rise condo in Chelsea",
          Fee: 30
        },
      ],
      index: 0,
      listings: [
        {
          img: LittlemillPhoto,
          address: "852 Little Mill Rd, Monroeville, NJ 08313",
          price: "235,000",
          bedrooms: 3,
          bathrooms: 2,
          squarefeet: "1,372",
          taxes: "1,200",
          condition: "Great",
          likes: 3,
          dislikes: 7,
          agent: "David Justice"
        },
        {
          img: HiddenPhoto,
          address: "121 Hidden Dr, Blackwood, NJ 08012",
          price: "255,000",
          bedrooms: 4,
          bathrooms: 2.5,
          squarefeet: "2002",
          taxes: "8,000",
          condition: "Good",
          likes: 10,
          dislikes: 2,
          agent: "David Justice"
        }
      ]
    


  
    }

    this.displayPage = this.displayPage.bind(this)
    this.displayAboutPage = this.displayAboutPage.bind(this)
    this.displayDashboard = this.displayDashboard.bind(this)
    this.displayMyProfile = this.displayMyProfile.bind(this)
    this.displayAgentSearchPage = this.displayAgentSearchPage.bind(this)
    this.displayLeadPage = this.displayLeadPage.bind(this)
    this.displayReferralPage = this.displayReferralPage.bind(this)
    this.displayNewreferralPage = this.displayNewreferralPage.bind(this)
    this.displayAgentResultsPage = this.displayAgentResultsPage.bind(this)
    this.displayFeedPage = this.displayFeedPage.bind(this)
    this.displayListingsPage = this.displayListingsPage.bind(this)
    this.signupOrLogin = this.signupOrLogin.bind(this)
    this.createReferral = this.createReferral.bind(this)
    this.createUser = this.createUser.bind(this)
    this.loginUser = this.loginUser.bind(this)
    this.logoutUser = this.logoutUser.bind(this)
    this.getUser = this.getUser.bind(this)
    this.searchResults = this.searchResults.bind(this)
    this.displaySearchedUserProfile = this.displaySearchedUserProfile.bind(this)
    this.setSearchedUser = this.setSearchedUser.bind(this)
    this.addLead = this.addLead.bind(this)
    this.deleteReferral = this.deleteReferral.bind(this)
    this.addListing = this.addListing.bind(this)
    this.changeListing = this.changeListing.bind(this)
    this.backListing = this.backListing.bind(this)
    this.likeordislike = this.likeordislike.bind(this)

  
    
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
    this.setState({listingspage: false, feedpage:false, conversationpage: false, referralpage: false, leadpage: false, agentsearchpage: false, aboutpage:false, userprofile:false, dashboard:true, searcheduserprofile:false})
  }

  displayMyProfile() {
    console.log("Profile button is working")
    this.setState({favoritespage: false, aboutpage:false, dashboard: false, userprofile: true})
  }

  displayAgentSearchPage() {
    console.log("Agent search button is working")
    this.setState({agentsearchpage: true, aboutpage: false, dashboard: false, userprofile:false, agentresultspage:false})
  }

  displayLeadPage() {
    console.log("Lead Page button is working")
    this.setState({leadpage: true, agentsearchpage: false, aboutpage: false, dashboard: false, userprofile:false})
  }

  displayReferralPage() {
    console.log("Referral page button is working")
    this.setState({referralpage:true, leadpage: false, agentsearchpage: false, aboutpage: false, dashboard: false, userprofile:false})
  }
  
  displayNewreferralPage() {
    console.log("New referral page button is working")
    this.setState({newreferralpage: true, conversationpage:false, referralpage:false, leadpage: false, agentsearchpage: false, aboutpage: false, dashboard: false, userprofile:false})
  }

  displayAgentResultsPage() {
    console.log("Agent results page button is working")
    this.setState({agentresultspage: true, newreferralpage: false, conversationpage:false, referralpage:false, leadpage: false, agentsearchpage: false, aboutpage: false, dashboard: false, userprofile:false })
  }

  displaySearchedUserProfile() {
    console.log("Search user profile button is working")
    this.setState({agentresultspage: false, searcheduserprofile: true})
  }

  displayFeedPage() {
    this.setState({feedpage: true,dashboard: false})
  }

  displayListingsPage() {
    this.setState({listingspage: true, dashboard: false})
  }



  signupOrLogin() {
    if(this.state.signuppage === true) {
      this.setState({signuppage:false})
    }else {
      this.setState({signuppage:true})
    }
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

  createUser() {
    return new Promise((resolve, reject) => {
      if(!(document.getElementById("email-signup").innerText == null)) {
        this.setState({users: this.state.users.concat({
          Name: document.getElementById("fullname-signup").value,
          Username: document.getElementById("username-signup").value,
          Email: document.getElementById("email-signup").value,
          Password: document.getElementById("password-signup").value,
          Bio: document.getElementById("bio-signup").value,
          Photo: Photo2
        }) })
        resolve(this.state.users)
      
      }else {
        return
     }
    }).then((array) => {
      setTimeout(() => {
        this.setState({LoggedUser:this.state.users[this.state.users.length -1]}) 
      }, 1000);
    }).then(() => {
      console.log(this.state.LoggedUser)
      this.loginUser()
    })
  }

  
  loginUser() {
    this.setState({loggedIn:true})
  }

  logoutUser() {
    this.setState({loggedIn:false})
    this.setState({LoggedUser: null})
  }

  getUser() {
    this.state.users.forEach(element => {
        if(element.Email === document.getElementById("email-login").value && element.Password === document.getElementById("password-login").value) {
            this.setState({LoggedUser: element})
            this.loginUser()
        }
    });
  }

  searchResults() {
    this.displayAgentResultsPage()
  }

  setSearchedUser(agent) {
    this.setState({searcheduser: agent})
    setTimeout(() => {
      console.log(this.state.searcheduser)
      this.displaySearchedUserProfile()
    }, 500)
    
  }


  deleteReferral(referral) {
    this.setState({referrals: this.state.referrals.filter(function(value, index, arr) {
      return !(value === referral)
    })})
    setTimeout(() => {
      console.log(this.state.referrals)
    }, 1000);
  }

  addLead(referral) {
    this.setState({
      LoggedUser: {
        Name: this.state.LoggedUser.Name,
        Email: this.state.LoggedUser.Email,
        Password: this.state.LoggedUser.Password,        
        Username: this.state.LoggedUser.Username,
        Photo: this.state.LoggedUser.Photo,
        Bio: this.state.LoggedUser.Bio,
        State: this.state.LoggedUser.State,
        Tags: this.state.LoggedUser.Tags,
        Leads: this.state.LoggedUser.Leads.concat(referral)
      }  
     })
    console.log("Accepted referral lead")
    setTimeout(() => {
      console.log(this.state.LoggedUser.Leads)
      setTimeout(() => {
        this.deleteReferral(referral)
      }, 250);
    }, 500);
  }

  addListing(i,a,p,bd,bth,s,t,c) {
    this.setState({listings: this.state.listings.concat({
      img: i,
      address: a,
      price: p,
      bedrooms: bd,
      bathrooms: bth,
      squarefeet: s,
      taxes: t,
      condition: c,
      likes: 0,
      dislikes: 0,
      agent: this.state.LoggedUser.Name
    })})
  }

  changeListing() {
    if(this.state.index < this.state.listings.length -1 || this.state.index === 0) {
        this.setState({index: this.state.index + 1 })
        setTimeout(() => {
          console.log(this.state.index)
        }, 250);
    }else {
      console.log("No more listings to display")
      return
    }
  }

  backListing(n) {
    if(this.state.index > 0) {
      this.setState({index: this.state.index - 1 })
      setTimeout(() => {
        console.log(this.state.index)
      }, 250);
    }else {
      console.log("No previous listings to show")
      return
    }
  }

  likeordislike(index, choice) {
    const listings = [...this.state.listings]
    if(choice === "like") {
      listings[index].likes = listings[index].likes + 1
      this.setState({listings,})
    }else {
      listings[index].dislikes = listings[index].dislikes + 1
      this.setState({listings,})
    } 
  }
  


  render() {
      if(this.state.loggedIn === false ) {
        if(this.state.signuppage === false) {
          return <LoginPage func = {this.getUser} array = {this.state.users} func2 ={this.signupOrLogin} />
        }else{
          return <SignupPage func1 ={this.createUser} func2 = {this.signupOrLogin} />
        }
      }else {
      if(this.state.dashboard  === true) {
        return <Dashboard listingsFunc = {this.displayListingsPage} aboutFunc = {this.displayAboutPage} profileFunc ={this.displayMyProfile} searchFunc = {this.displayAgentSearchPage} leadFunc = {this.displayLeadPage} referralFunc ={this.displayReferralPage} feedFunc = {this.displayFeedPage} logout = {this.logoutUser}/>
      }
      else if(this.state.aboutpage === true) {
        return <AboutScreen backFunc = {this.displayDashboard}/>
      }
      else if(this.state.userprofile === true) {
        return <LoggedInUserProfile backFunc = {this.displayDashboard} user = {this.state.LoggedUser} favFunc = {this.displayFavoritesPage}/>
      }
      else if(this.state.agentsearchpage === true) {
        return <AgentSearchPage searchFunc = {this.searchResults} backFunc = {this.displayDashboard}/>
      }
      else if(this.state.leadpage === true) {
        return <LeadPage backFunc = {this.displayDashboard} leads = {this.state.LoggedUser.Leads}/>
      }
      else if(this.state.referralpage === true) {
        return <ReferralPage backFunc = {this.displayDashboard} referrals = {this.state.referrals} addFunc = {this.displayNewreferralPage} leadFunc = {this.addLead}/>
      }
      else if(this.state.newreferralpage === true) {
        return <NewReferralForm backFunc = {this.displayReferralPage} createFunc = {this.createReferral}/>
      }
      else if(this.state.agentresultspage === true) {
        return <AgentResultsPage backFunc = {this.displayAgentSearchPage} users = {this.state.users} profileFunc = {this.setSearchedUser} />
      }
      else if(this.state.searcheduserprofile === true) {
        return <SearchedUserProfile backFunc = {this.displayAgentResultsPage} user = {this.state.searcheduser}/>
      }
      else if(this.state.feedpage === true) {
        return <Feed backFunc = {this.displayDashboard} />
      }
      else if(this.state.listingspage === true) {
        return <ListingsPage backFunc = {this.displayDashboard} listings = {this.state.listings} index = {this.state.index} reverse = {this.backListing} forward = {this.changeListing} likefunc = {this.likeordislike}/>
      }
  }
  }
}

export default App