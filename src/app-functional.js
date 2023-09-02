import axios from "axios";
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
import NewListingPage from "./components/pages/newlistingpage";
import ListingsPage from "./components/pages/listings-page";
import SignupPage from "./components/pages/signup-page";
import Photo1 from "./components/images/david-justice.jpg";
import Photo2 from "./components/images/IMG_1049.jpg";
import Photo3 from "./components/images/IMG_3396.jpg"
import LittlemillPhoto from "../src/components/images/852littlemill.JPG";
import HiddenPhoto from "../src/components/images/121hidden.jpg";
import React, { useState, useEffect, useContext, createContext } from "react";

const apiBaseUrl =  "https://brokersphere-api.fly.dev"

export const imageContext = createContext('empty')

export default function App() {
    // Test api with new variables

    const [dbUsers, setDbUsers] = useState([])
    const [dbReferrals,setDbReferrals] = useState([])
    const [dbListings,setDbListings] = useState([])
    // Declare and initialize state and setter functions

    const [page, setPage] = useState('dashboard')
    const [LoggedUser, setLoggedUser] = useState(null)
    const [loggedId,setLoggedId] = useState('empty')
    const [justCommented,setJustCommented] = useState(false)
    const [signuppage, setSignupPage] = useState(false)
    const [imageUpload, setImageUpload] = useState('empty')
    const [loggedIn, setLoggedIn] = useState(false)
    const [userprofile, setUserProfile] = useState(false)
    const [searcheduserprofile, setSearchedUserProfile] = useState(false)
    const [searcheduser, setSearchedUser] = useState(false)
    const [index, setIndex] = useState(0)
    const [files, setFiles] = useState(null)
    const [searchresults, setSearchResults] = useState([])
    const [users, setUsers] = useState([
        {
            Name: "David Justice",
            Username: "officialdavidjustice",
            Email: "example@email.com",
            Password: "Jade2021!",
            Photo: Photo1,
            Bio: "NJ Realtor and Founder of Brokersphere",
            State: "Delaware",
            Tags: ["Buyers", "Condos", "Sellers"],
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
    ])

    const [referrals, setReferrals] = useState([
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
    ])

    const [listings, setListings] = useState([
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
            agent: "David Justice",
            comments: [
                {
                    sender: "@Johnwick",
                    message: "The land this property sits on is amazing!"
                },
                {
                    sender: "@Michaelwilliams",
                    message: "I think the price is just right."
                },
                {
                    sender: "@realtorjenny",
                    message: "My client saw this home last Saturday. Nice area."
                }
            ],
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
            agent: "David Justice",
            comments: [
                {
                    sender: "@chrisj23",
                    message: "Wish there was a better photo",
                },
                {
                    sender: "@kevinsellsnj",
                    message: "Taxes are alittle high, but you can't beat the location"
                }
            ],
        }
    ])


    //api interaction

    async function getDbUsers() {
        let response = await fetch('https://brokersphere-api.fly.dev/api/users')
        let users = await response.json()
        setDbUsers(await users)
    }

    async function getDbReferrals() {
        let response = await fetch('https://brokersphere-api.fly.dev/api/referrals')
        let referrals = await response.json()
        setDbReferrals(await referrals)
    }

    async function getDbListings() {
        let response = await fetch('https://brokersphere-api.fly.dev/api/listings')
        let listings = await response.json()
        setDbListings(await listings)
    }

    //Application functions

    function signupOrLogin() {
        if (signuppage === true) {
            setSignupPage(false)
        } else {
            setSignupPage(true)
        }
    }

    async function createUser() {
            return new Promise(async (resolve, reject) => {
                if(!(document.getElementById("email-signup").innerText == null)) {
                    let newUser = {
                        Name: document.getElementById("fullname-signup").value,
                        Username: '@'+document.getElementById("username-signup").value,
                        Email: document.getElementById("email-signup").value,
                        Password: document.getElementById("password-signup").value,
                        Bio: document.getElementById("bio-signup").value,
                        Photo: imageUpload,
                        Tags: [document.getElementById("tags-input").value],
                        State: document.getElementById("state-signup").value,
                        leads: []
                    }
                    
                    const options = {
                        method: 'post',
                        data: newUser
                    }
                    await axios.post('https://brokersphere-api.fly.dev/api/users', newUser)
                    .then(async () => {
                         await getDbUsers()
                    }).catch((err)  => console.log(err))
                    resolve()  
    
                } 
                else {
                    return
                }
            }).then(() => {
                loginUser()
            })
    }

    async function createReferral() {
        if (!(document.getElementById("name-input").innerText == null)) {
            /*
            let updatedReferrals = referrals.concat({
                Agent: LoggedUser.Name,
                Type: document.getElementById("type-input").value,
                Location: document.getElementById("location-input").value,
                Financing: document.getElementById("financing-input").value,
                Budget: document.getElementById("budget-input").value,
                Email: document.getElementById("email-input").value,
                Number: document.getElementById("number-input").value,
                Fee: document.getElementById("fee-input").value,
                Name: document.getElementById("name-input").value,
                Notes: document.getElementById("notes-input").value
            })

            setReferrals(updatedReferrals)
            setPage('referralpage')
            */

            // post request to api
            let newReferral = {
                Agent: LoggedUser.Name,
                Type: document.getElementById("type-input").value,
                Location: document.getElementById("location-input").value,
                Financing: document.getElementById("financing-input").value,
                Budget: document.getElementById("budget-input").value,
                Email: document.getElementById("email-input").value,
                Number: document.getElementById("number-input").value,
                Fee: document.getElementById("fee-input").value,
                Name: document.getElementById("name-input").value,
                Notes: document.getElementById("notes-input").value
            }
            const options = {
                method: 'post',
                data: {
                    Referral: newReferral
                }
            }
            await axios.post('https://brokersphere-api.fly.dev/api/referrals',newReferral)
            .then(async() => {
                await getDbReferrals()
                setPage('referralpage')
            })
        } else {
            return
        }
    }

    
    function loginUser() {
        setLoggedIn(true)
    }

    function logoutUser() {
        setLoggedIn(false)
        setLoggedUser(null)
    }

    function getUser() {
        dbUsers.forEach(element => {
            if (element.Email === document.getElementById("email-login").value && element.Password === document.getElementById("password-login").value) {
                setLoggedUser(element)
                console.log('match found for log in')
                loginUser()
            }
            else {
                console.log('no matches found')
            }
        });
    }

    function searchResults() {
        /*
        dbUsers.forEach((user) => {
            if (user.State === document.getElementById("state-input").value) {
                let results = searchresults.concat(user)
                setSearchResults(results)
            }
        })
        */
        let results = dbUsers.filter((user) => {
            return user.State === document.getElementById("state-input").value
        })
            setSearchResults(results)
            console.log(searchResults)
        
        let stateSearch = document.getElementById("state-input")
        setPage('agentresultspage')
    }

    function searchUser(agent) {
        setSearchedUser(agent)
        setTimeout(() => {
            console.log(searcheduser)
            setPage('searcheduserprofile')
        }, 500)
    }

    async function deleteReferral(referral) {
        const options = {
            method: 'delete',
            data: {
                Referral:referral
            }
        }
        await axios.delete('https://brokersphere-api.fly.dev/api/referrals', options)
        .then(() => getDbReferrals());
        /*
        setReferrals(referrals.filter((value, index, arr) => {
            return !(value === referral)
        }))
        setTimeout(() => {
            console.log(referrals)
        }, 1000);
        */
    }

    async function addLead(referral) {
        let userId = LoggedUser._id
        const options = {
            method: 'put',
            data: {
                id: userId,
                Referral:referral
            }
        }
        console.log(options)
        
        await axios.put('https://brokersphere-api.fly.dev/api/users/leads', options)
        .then(async () => {
            deleteReferral(referral)
            await getDbUsers()
            console.log('lead added. waiting for user data to refresh')
            setLoggedId(userId)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    async function addListing(a,p,bd,bth,s,t,c,w) {
        let newListings = {
            img: imageUpload,
            address: a,
            price: p,
            bedrooms: bd,
            bathrooms: bth,
            squarefeet: s,
            taxes: t,
            condition: c,
            likes: 0,
            dislikes: 0,
            agent: LoggedUser.Name,
            website:w
        }
        //https://blooming-forest-72615.herokuapp.com/api/listings
        await axios.post('https://brokersphere-api.fly.dev/api/listings',newListings)
        .then(async() => {
            await getDbListings()
        }).then(() => {
            setPage('listingspage')
        })

        /*
        setListings((prev) => prev.concat({
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
            agent: LoggedUser.Name
        }))
        */
    }
    
    function changeListing() {
        if(index < dbListings.length -1 || index === 0) {
            setIndex((prev) => prev + 1)
            setTimeout(() => {
              console.log(index)
            }, 250);
        }else {
          console.log("No more listings to display")
          return
        }
      }
    
    function backListing(n) {
        if(index > 0) {
            setIndex((prev) => prev - 1)
          setTimeout(() => {
            console.log(index)
          }, 250);
        }else {
          console.log("No previous listings to show")
          return
        }
      }
    
    function likeordislike(index, choice) {
        const updatedListings = [...dbListings]
        if(choice === "like") {
          updatedListings[index].likes = updatedListings[index].likes + 1
          setDbListings(updatedListings)
        }else {
          updatedListings[index].dislikes = updatedListings[index].dislikes + 1
          setDbListings(updatedListings)
        } 
      }
    
    async function newComment(Listing) {

        const newComment = {
            sender: LoggedUser.Username,
            message: document.getElementById("comment-input").value
        }
        const options = {
            method: 'put',
            data: {
                listing:Listing,
                comment:newComment
            }
        }

        //https://blooming-forest-72615.herokuapp.com/
        await axios.put('https://brokersphere-api.fly.dev/api/listings/comment', options)
        .then(async () => {
            await getDbListings()
            setPage('dashboard')
            setJustCommented(true)
        }).then(() => {
            document.getElementById("comment-input").value = " "
            document.getElementById("new-commentdiv").style.display = "none"
        })

        /*
        console.log(document.getElementById("comment-input").value)
        const array = listings
        array[index].comments.push({
          sender: LoggedUser.Username,
          message: document.getElementById("comment-input").value
        })
        setListings(array)
        document.getElementById("comment-input").value = " "
        document.getElementById("new-commentdiv").style.display = "none"
        */
    }

    //useEffect to load users

    useEffect(() => {

        //shows that api is working 
        getDbUsers()
        getDbReferrals()
        getDbListings()
    },[])

    useEffect(() => {
        console.log(dbUsers)
        console.log(dbReferrals)
        console.log(dbListings)
    },[dbUsers,dbReferrals,dbListings])

    useEffect(()=> {
        setLoggedUser(dbUsers[dbUsers.length -1])
        if(page === 'referralpage') {
            dbUsers.forEach((user) => {
                if(user._id == loggedId) {
                    setLoggedUser(user)
                }
            })
            setPage('dashboard')
        }
    },[dbUsers])

    useEffect(() => {
        if(justCommented == true) {
            setPage('listingspage')
        }
    },[dbListings])
    


    //Return jsx
    if (loggedIn === false) {
        if (signuppage === false) {
            return <LoginPage func={getUser} array={dbUsers} func2={signupOrLogin} />
        }
        else {
            return (
                <imageContext.Provider value={[imageUpload,setImageUpload]}>
                    <SignupPage func1={createUser} func2={signupOrLogin}  setImage = {setImageUpload} />
                </imageContext.Provider>
            )
        }
    }
    else {
        if (page === 'dashboard') {
            return <Dashboard listingsFunc={setPage} aboutFunc={() => setPage('aboutpage')} profileFunc={() => setPage('userprofile')} searchFunc={() => { setPage('agentsearchpage'); setSearchResults([]) }} leadFunc={() => setPage('leadpage')} referralFunc={() => setPage('referralpage')} feedFunc={() => setPage('newlistingpage')} logout={logoutUser} />
        }
        else if (page === 'aboutpage') {
            return <AboutScreen backFunc={() => setPage('dashboard')} />
        }
        else if (page === 'userprofile') {
            return <LoggedInUserProfile backFunc={() => setPage('dashboard')} user={LoggedUser} favFunc={() => setPage('favoritespage')} />
        }
        else if (page === 'agentsearchpage') {
            return <AgentSearchPage searchFunc={searchResults} backFunc={() => setPage('dashboard')} />
        }
        else if (page === 'leadpage') {
            return <LeadPage backFunc={() => setPage('dashboard')} leads={LoggedUser.leads} />
        }
        else if (page === 'referralpage') {
            return <ReferralPage backFunc={() => setPage('dashboard')} referrals={dbReferrals} addFunc={() => setPage('newreferralpage') } leadFunc={addLead} />
        }
        else if (page === 'newreferralpage') {
            return <NewReferralForm backFunc={() => setPage('referralpage')} createFunc={createReferral} />
        }
        else if (page === 'agentresultspage') {
            return <AgentResultsPage backFunc={() => {setPage('agentsearchpage'); setSearchResults([]) } } users={searchresults} profileFunc={searchUser} />
        }
        else if (page === 'searcheduserprofile') {
            return <SearchedUserProfile backFunc={() => setPage('agentresultspage')} user={searcheduser} />
        }
        else if (page === 'newlistingpage') {
            return (
                <imageContext.Provider value={[imageUpload,setImageUpload]}>
                    <NewListingPage backFunc={() => setPage('dashboard')} func1 ={addListing} />
                </imageContext.Provider>
            )
        }
        else if (page === 'listingspage') {
            return <ListingsPage commentFunc={newComment} backFunc={() => setPage('dashboard')} listings={dbListings} index={index} reverse={backListing} forward={changeListing} likefunc={likeordislike} />
        }
    }
}