
import { useState } from 'react';
import './App.css';
import Filter from './filter/filter';
import Movielist from './movielist/movielist';

const moviesList=[{
  title : 'Movie 01', 
  description : 'movie description 01',
  rating : 1,
  posterurl : 'url 01'
},
{
  title : 'Movie 02', 
  description : 'movie description 02',
  rating : 2,
  posterurl : 'url 02'
},
{
  title : 'Movie 03', 
  description : 'movie description 03',
  rating : 3,
  posterurl : 'url 03'
},
{
  title : 'Movie 04', 
  description : 'movie description 04',
  rating : 4,
  posterurl : 'url 04'
},
{
  title : 'Movie 05', 
  description : 'movie description 05',
  rating : 5,
  posterurl : 'url 05'
}
]
const App=()=> {
    const [movies, setmovies] = useState(moviesList)
        
  return (
    <>
    <Filter/>
    <Movielist movies= {movies} />

    </>
  );
}

export default App;
