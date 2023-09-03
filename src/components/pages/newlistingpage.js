
import Header from "../header";
import "../../styles/newlistingpage.css"
import {useState, useEffect,useContext,useRef} from "react";
import { imageContext } from "../../app-functional";
import axios from "axios";


function NewListingPage(props) {
    const [url,setUrl] = useContext(imageContext) 

    const imageInputRef = useRef()
    function upload(e) {
        //console.log(e.target.files[0])
        const data = new FormData()
        data.append('file', e.target.files[0])
        //"https://brokersphere-api.fly.dev/uploadImage"
        axios.post("https://brokersphere-api.fly.dev/uploadImage", data, { 
        // receive two    parameter endpoint url ,form data
         })
        .then(res => { // then print response status
             setUrl(res.data.url)
             console.log(res)
        })
        .catch(reason => console.log(reason))
        
    }

    function newListingFunc() {
        let address = document.getElementById('listaddress-upload').value
        let taxes = document.getElementById('taxes-upload').value
        let price = document.getElementById('price-upload').value
        let bedrooms = document.getElementById('beds-upload').value
        let bathrooms = document.getElementById('baths-upload').value
        let squarefeet = document.getElementById('sqft-upload').value
        let condition = document.getElementById('condition-upload').value
        let website = ' '
        let websiteElement = document.getElementById('website-upload')
        if(websiteElement.value == null || websiteElement.value == "") {
            website = ' '
        }else {
            website = websiteElement.value
        }
        props.func1(address,price,bedrooms,bathrooms,squarefeet,taxes,condition,website)
    }

    
    // useEffect(() => {
    //     console.log(document.getElementById('website-upload').value)
    // },[])

    return (
        <div id="feed-page">
            <Header leftIcon ="arrow_back" pageName="New Listing" backFunc ={props.backFunc}/>
            <form id="newlisting-form">
                <label id="test-label">Add Photo<br></br><input type="file" accept="image/*" id="listingphoto-upload" ref={imageInputRef} name ="image" onChange={upload}></input><span className="material-symbols-outlined">add_a_photo</span></label>
                <label htmlFor="listaddress-upload">Address</label>
                <input id="listaddress-upload" placeholder="123 Howard St, City, State, Zip"></input>
                <label htmlFor="taxes-upload">Taxes</label>
                <input id="taxes-upload" placeholder="3,000"></input>
                <label htmlFor="price-upload">Price</label>
                <input id="price-upload" placeholder="$400,000"></input>
                <label htmlFor="beds-upload">Bedrooms</label>
                <input id="beds-upload" placeholder="3" type="number"></input>
                <label htmlFor="baths-upload">Baths</label>
                <input id="baths-upload" placeholder="2" type="2"></input>
                <label htmlFor= "sqft-upload">Square Feet</label>
                <input id="sqft-upload" placeholder="4,000"></input>
                <label htmlFor="condition-upload">Condition</label>
                <input id="condition-upload" placeholder="Bad,Good,Great,New"></input>
                <label htmlFor="website-upload">Website Link</label>
                <input id="website-upload" placeholder="Enter a url for mls or website"></input>
                <button type="button" onClick={() => newListingFunc()}>SIGNUP</button>
            </form>
        </div>
    )
}

export default NewListingPage