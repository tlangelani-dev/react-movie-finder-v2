import React from 'react';
import Movie from './Movie';

const Movies = ({movies, openModal}) => {
    return (
        <div className="movies-cp">
            {movies.map(movie => (
                <Movie movie={movie} key={movie.id} openModal={openModal} />
            ))}
        </div>
    )
}

export default Movies;
