import { useState } from 'react'
import MemeData from '../MemeData'

const Meme = () => {

    const [url, setUrl] = useState("");
    const [file, setFile] = useState(null);
    const[meme,setMeme] = useState({
        topText:"",
        bottomText:"",
        imageUrl:""
    })

    const getMemeImage = () => {
        let memesArray = MemeData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setUrl(url);
        setFile(null);

    }

    const getMemeImagefromfile = (event) => {
        // TODO: Implement file upload functionality for local images
        setFile(event.target.files[0]);
        setUrl("");
    }

    function handleChange(event){
        const {name,value} = event.target
        setMeme(prevMeme=>({
            ...prevMeme,[name]: value
        }))
    }
    return (
        <main>
            <div className='form'>
                <input type='text' placeholder='Input text 1' className='form--input' name="topText" onChange={handleChange} />
                <input type='text' placeholder='Input text 2' className='form--input' name="bottomText" onChange={handleChange} />
                <button type='submit' className='form--button'
                    onClick={getMemeImage}
                >Get new image
                </button>
                {/* <input type='file' className='form--button'
                    onClick={getMemeImagefromfile}
                /> */}
                {/* Get new image from your system files
                </input> */}
            </div>
            <div className='meme'>
                {url && <img src={url} className='meme--image' />}
                {file && <img src={URL.createObjectURL(file)} className='meme--image' />}
                <h2 className='meme--text top'>{meme.topText}</h2>
                <h3 className='meme--text bottom'>{meme.bottomText}</h3>
            </div>


        </main>
    )
}

export default Meme