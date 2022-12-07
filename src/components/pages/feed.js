
import Header from "../header";
import "../../styles/feed.css"
import {useState, useEffect} from "react";
import { getDocs, collection } from "firebase/firestore";
import { storage, db } from "../../firebase-config";
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";

function Feed(props) {
    const [imageUpload, setImageUpload] = useState(null)
    const [imageList, setImageList] = useState([])
    
    const imageListRef = ref(storage, "images/")
    const uploadImage = () => {
        if(imageUpload == null) return
        const imageRef = ref(storage, `images/${imageUpload.name}`)
        uploadBytes(imageRef, imageUpload).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                setImageList((prev) => [...prev, url])
            })
        })

    }

    useEffect(() => {
        listAll(imageListRef).then((response) => {
            response.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setImageList((prev) => [...prev, url])
                })
            })
        })
    }, [])

    
    return (
        <div id="feed-page">
            <Header leftIcon ="arrow_back" pageName="Channels" backFunc ={props.backFunc}/>
            <div>
                <input type="file" accept="image/*" onChange={(event) => {setImageUpload(event.target.files[0])}}></input>
                <button onClick={uploadImage}>Upload Image</button>
            </div>
        </div>
    )
}

export default Feed