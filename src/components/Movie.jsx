import React from 'react';

const Movie = ({movie, openModal}) => {
    if (!movie.poster_path) return false;
    return (
        <div className="movie-cp" onClick={() => openModal(movie.id)}>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="Movie Poster"/>
            <h3>{movie.original_title}</h3>
        </div>
    )
}

export default Movie;
