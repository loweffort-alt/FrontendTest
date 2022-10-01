import React, {useState, useEffect} from 'react'
import "./index.css";
import Movies from '../movies';



function MovieList() {
  const [moviesList, setMoviesList] = useState([])
  const [search, setSearch] = useState('2015')
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    fetch(`https://jsonmock.hackerrank.com/api/movies?Year=${search}`)
      .then(res => res.json())
      .then(data => {
        setLoaded(false)
        setMoviesList(data.data)
      })
  }, [search])

  return (
    <div className="layout-column align-items-center mt-50">
      <section className="layout-row align-items-center justify-content-center">
        <input type="number" className="large" placeholder="Enter Year eg 2015" data-testid="app-input" onChange={e => setSearch(e.target.value)}/>
        <button className="" data-testid="submit-button" onClick={e => setLoaded(true)}>Search</button>
      </section>

      <ul className="mt-50 styled" data-testid="movieList">
        {loaded 
          ? <Movies movies={moviesList}/> 
          : 'No Results Found'
        }
      </ul>

      <div className="mt-50 slide-up-fade-in" data-testid="no-result"></div>
    </div>
  );
}

export default MovieList
