
import React, { useEffect, useState } from "react"

export default function Meme(){

const [meme,setMeme] = useState({
    topText : "",
    bottomText :"",
    randomImg : "https://i.imgflip.com/2za3u1.jpg"
})

const [allMeme,setAllMeme] = useState([])

useEffect(() => {
    console.log("Effect Ran")
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMeme(data.data.memes))
},[])


    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMeme.length)
        const url = allMeme[randomNumber].url
        setMeme(prevMeme => ({...prevMeme,randomImg : url})) 
        console.log(url)
    }

    function handleChange(event) {
        const {name,value} = event.target
        setMeme(prevMeme =>({
            ...prevMeme,
            [name] : value
        }))
    }

    return (
     <main>
         <div className="formPage">
            <input 
                type="text"
                placeholder="Top Text" 
                className="forminput"
                name="topText"
                value={meme.topText}
                onChange={handleChange}
            />
            <input 
                type="text"
                placeholder="Bottom Text" 
                className="forminput"
                name="bottomText"
                value={meme.bottomText}
                onChange={handleChange}
             />
             <button 
             className="formbutton" 
             onClick={getMemeImage}
             >
                Get a new meme image 🖼
             </button>
         </div>

         <div className="meme">
                <img src={ meme.randomImg } alt="memeImages"  className="meme--images"/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
    </main>
    )
}