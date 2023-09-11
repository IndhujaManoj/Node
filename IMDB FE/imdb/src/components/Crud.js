import React, { useState } from 'react'
import axios from 'axios';
import '../style/style.css'
const Crud = () => {
    const [data, setData] = useState({
        imdbID: "",
        title: "",
        year: "",
        runTime: "",
        genre: "",
        writer: "",
        actors: "",
        plot: "",
        images: [],
        imdbRating: ""
    })
   
    const handleOk = async (e) => {
        console.log(data)
        e.preventDefault()
        try {
            const response = await axios.post('http://localhost:6005/api/movie', data, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };
      
    
    return (
        <div className='container'>

            <form className='form'>
                <div className='block'>
                    <label>IMDB ID :</label>
                    <input type='text' placeholder='IMDB ID' onChange={(e) => setData({ ...data, imdbID: e.target.value })} />
                </div>
                <div className='block'>
                    <label>TITLE :</label>
                    <input type='text' placeholder='TITLE' onChange={(e) => setData({ ...data, title: e.target.value })}/>
                </div>
                <div className='block'>
                    <label>YEAR :</label>
                    <input type='text' placeholder='YEAR' onChange={(e) => setData({ ...data, year: e.target.value })}/>
                </div>
                <div className='block'>
                    <label>RUN TIME :</label>
                    <input type='text' placeholder='RUN TIME' onChange={(e) => setData({ ...data, runTime: e.target.value })}/>
                </div>
                <div className='block'>
                    <label>GENERE:</label>
                    <input type='text' placeholder='GENERE' onChange={(e) => setData({ ...data, genre: e.target.value })}/>
                </div>
                <div className='block'>
                    <label>WRITER :</label>
                    <input type='text' placeholder='WRITER' onChange={(e) => setData({ ...data, writer: e.target.value })}/>
                </div>
                <div className='block'>
                    <label>ACTORS:</label>
                    <input type='text' placeholder='ACTORS' onChange={(e) => setData({ ...data, actors: e.target.value })}/>
                </div>
                <div className='block'>
                    <label>PLOT :</label>
                    <input type='text' placeholder='PLOT' onChange={(e) => setData({ ...data, plot: e.target.value })}/>
                </div>
                <div className='block'>
                    <label>IMAGES :</label>
                    <input type='text' placeholder='IMAGES' onChange={(e) => setData({ ...data, images: e.target.value })}/>
                </div>
                <div className='block'>
                    <label>IMDB RATTING:</label>
                    <input type='text' placeholder='IMDB RATTING' onChange={(e) => setData({ ...data, imdbRating: e.target.value })}/>
                </div>
                <div className='block'>
                    <button onClick={handleOk}>ok</button>
                </div>
            </form>
        </div>
    )
}

export default Crud
