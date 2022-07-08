import React, { useState } from 'react'
//6824c09e api key
import { useEffect } from 'react';
import Moviecard from './Moviecard';
import './App.css';
import Searchicon from './search.svg';
const API_URL = 'http://omdbapi.com?apikey=6824c09e'
// const movie1 = {
//     "Title": "Amazing Spiderman Syndrome",
//     "Year": "2012",
//     "imdbID": "tt2586634",
//     "Type": "movie",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BZDlmMGQwYmItNTNmOS00OTNkLTkxNTYtNDM3ZWVlMWUyZDIzXkEyXkFqcGdeQXVyMTA5Mzk5Mw@@._V1_SX300.jpg"
// };


const App = () => {
  const [movies ,setMovies] =  useState([]);
  const [searchTerm ,setSearchTerm] = useState('')
  const searchMovies = async (title) =>{
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json();
    setMovies(data.Search);
  }
  useEffect(()=> {
searchMovies('batman');
  },[]);

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className='search'>
        <input
        placeholder='search for movies'
        value={searchTerm}
        onChange={(e)=>setSearchTerm(e.target.value)}
        />
        <img
        src={Searchicon}
        alt='search'
        onClick={()=> searchMovies(searchTerm)}
        />
      </div>
      {
          movies?.length > 0
          ?(     <div className='container'>
        {movies.map((movie)=>(
          <Moviecard movie={movie}/>
        ))}
        </div>
        )
        : (
          <div className='empty'>
            <h2>No movies Found</h2>
          </div>
        )

      };

 
      </div>
    
  )
};

export default App