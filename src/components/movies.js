import React from 'react'

function Movies({movies}) {

  return (
    <>
      {movies.map(e => {
        return(
          <li 
            className="slide-up-fade-in py-10" 
            key={e.imdbID}
          >
            {e.Title}
          </li>
        )
      })}
    </>
  )
}

export default Movies
