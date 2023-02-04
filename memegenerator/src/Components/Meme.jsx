export default function Meme(){
    return (
        <main>
            <form className="formPage">
                <input type="text"
                placeholder="Top Text" 
                className="forminput"/>
                <input type="text"
                placeholder="Bottom Text" 
                className="forminput"/>
                <button type="submit" className="formbutton">Get a new meme image 🖼</button>
            </form>
        </main>
    )
}