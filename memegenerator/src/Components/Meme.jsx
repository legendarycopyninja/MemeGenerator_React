import { memesdata } from "../memedata"
import React, { useState } from "react"

export default function Meme(){

// const [memeImage,setMemeImage] = useState("https://i.imgflip.com/1g8my4.jpg")

const [meme,setMeme] = useState({
    topText : "",
    bottomText :"",
    randomImg : "https://i.imgflip.com/2za3u1.jpg"
})

const [allMemeImage,setAllMemeImage] = useState(memesdata)

    function getMemeImage() {
        const memesArray = allMemeImage.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({...prevMeme,randomImg : url})) 
        console.log(url)
    }

    return (
     <main>
         <div className="formPage">
            <input type="text"
            placeholder="Top Text" 
            className="forminput"/>
            <input type="text"
             placeholder="Bottom Text" 
             className="forminput"/>
             <button className="formbutton" onClick={getMemeImage}>Get a new meme image 🖼</button>
         </div>
         <img src={ meme.randomImg } alt="memeImages"  className="meme--images"/>
    </main>
    )
}