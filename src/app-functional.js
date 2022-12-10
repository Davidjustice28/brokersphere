import { db } from "./firebase-config";
import { collection, addDoc } from "firebase/firestore";
import { storage } from "./firebase-config";
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
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
import React, { useState, useEffect, useContext } from "react";
import { async } from "@firebase/util";

export default function App() {
    // Declare and initialize state and setter functions

    const [page, setPage] = useState('dashboard')
    const [LoggedUser, setLoggedUser] = useState(null)
    const [signuppage, setSignupPage] = useState(false)
    const [usersRef, setUsersRef] = useState(collection(db, "users"))
    const [imageUpload, setImageUpload] = useState(null)
    const [imageList, setImageList] = useState([])
    const [imageListRef, setImageListRef] = useState(storage, "images/")
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

    //Declare functions

    function signupOrLogin() {
        if (signuppage === true) {
            setSignupPage(false)
        } else {
            setSignupPage(true)
        }
    }

    function createUser() {
        listAll(imageListRef).then((response) => {
            response.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setImageList((prev => prev.concat(url)))
                })
            })
        }).then(() => {
            console.log(imageList)
        }).then(() => {
            return new Promise((resolve, reject) => {
                if(!(document.getElementById("email-signup").innerText == null)) {
                    setTimeout(() => {
                        setUsers((prev) => prev.concat({
                            Name: document.getElementById("fullname-signup").value,
                            Username: document.getElementById("username-signup").value,
                            Email: document.getElementById("email-signup").value,
                            Password: document.getElementById("password-signup").value,
                            Bio: document.getElementById("bio-signup").value,
                            Photo: imageList[0],
                            Tags: [document.getElementById("tags-input").value],
                            State: document.getElementById("state-signup").value,
                            Leads: []
                            })
                        )
                        resolve(users)  
                    }, 1000);

                } 
                else {
                    return
                }
        }).then((array) => {
            setTimeout(() => {
                new Promise((resolve, reject) => {
                    setLoggedUser(users[users.length -1])
                }).then(() => {
                    addDoc(collection(db, "users"),LoggedUser);
                })
            }, 1000);
        }).then(() => {
            setTimeout(() => {
                loginUser()
            },500)  
        })
    
      })
    }

    function createReferral() {
        if (!(document.getElementById("name-input").innerText == null)) {
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
        } else {
            return
        }
    }

    const uploadImage = () => {
        if (imageUpload == null) return
        const imageRef = ref(storage, `images/${imageUpload.name}`)
        uploadBytes(imageRef, imageUpload).then((response) => {
            alert("photo is uploaded")
        })

    }

    const changeImage = (event) => {
        setImageUpload(event.target.files[0])
    }


    function loginUser() {
        setLoggedIn(true)
    }

    function logoutUser() {
        setLoggedIn(false)
        setLoggedUser(null)
    }

    function getUser() {
        users.forEach(element => {
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
        users.forEach((user) => {
            if (user.State === document.getElementById("state-input").value) {
                let results = searchresults.concat(user)
                setSearchResults(results)
            }
        })
        setPage('agentresultspage')
    }

    function searchUser(agent) {
        setSearchedUser(agent)
        setTimeout(() => {
            console.log(searcheduser)
            setPage('searcheduserprofile')
        }, 500)
    }

    function deleteReferral(referral) {
        setReferrals(referrals.filter((value, index, arr) => {
            return !(value === referral)
        }))
        setTimeout(() => {
            console.log(referrals)
        }, 1000);
    }

    function addLead(referral) {
        setLoggedUser({
            Name: LoggedUser.Name,
            Email: LoggedUser.Email,
            Password: LoggedUser.Password,
            Username: LoggedUser.Username,
            Photo: LoggedUser.Photo,
            Bio: LoggedUser.Bio,
            State: LoggedUser.State,
            Tags: LoggedUser.Tags,
            Leads: LoggedUser.Leads.concat(referral)
        })

        console.log("Accepted referral lead")
        setTimeout(() => {
            console.log(LoggedUser.Leads)
            setTimeout(() => {
                deleteReferral(referral)
            }, 250);
        }, 500);
    }

    function addListing(i,a,p,bd,bth,s,t,c) {
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
    }
    
    function changeListing() {
        if(index < listings.length -1 || index === 0) {
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
        const updatedListings = [...listings]
        if(choice === "like") {
          updatedListings[index].likes = updatedListings[index].likes + 1
          setListings(updatedListings)
        }else {
          updatedListings[index].dislikes = updatedListings[index].dislikes + 1
          setListings(updatedListings)
        } 
      }
    
    function newComment() {
        console.log(document.getElementById("comment-input").value)
        const array = listings
        array[index].comments.push({
          sender: LoggedUser.Username,
          message: document.getElementById("comment-input").value
        })
        setListings(array)
        document.getElementById("comment-input").value = " "
        document.getElementById("new-commentdiv").style.display = "none"
      }


    //Return jsx
    if (loggedIn === false) {
        if (signuppage === false) {
            return <LoginPage func={getUser} array={users} func2={signupOrLogin} />
        }
        else {
            return <SignupPage func1={createUser} func2={signupOrLogin} change={changeImage} upload={uploadImage} />
        }
    }
    else {
        if (page === 'dashboard') {
            return <Dashboard listingsFunc={() => setPage('listingspage')} aboutFunc={() => setPage('aboutpage')} profileFunc={() => setPage('userprofile')} searchFunc={() => { setPage('agentsearchpage'); setSearchResults([]) }} leadFunc={() => setPage('leadpage')} referralFunc={() => setPage('referralpage')} feedFunc={() => setPage('feedpage')} logout={logoutUser} />
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
            return <LeadPage backFunc={() => setPage('dashboard')} leads={LoggedUser.Leads} />
        }
        else if (page === 'referralpage') {
            return <ReferralPage backFunc={() => setPage('dashboard')} referrals={referrals} addFunc={() => setPage('newreferralpage') } leadFunc={addLead} />
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
        else if (page === 'feedpage') {
            return <Feed backFunc={() => setPage('dashboard')} />
        }
        else if (page === 'listingspage') {
            return <ListingsPage commentFunc={newComment} backFunc={() => setPage('dashboard')} listings={listings} index={index} reverse={backListing} forward={changeListing} likefunc={likeordislike} />
        }
    }
}