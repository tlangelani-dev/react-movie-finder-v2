import React from 'react';

const Modal = ({ movie, closeModal }) => {
    return (
        <div className="modal-cp">
            <div className="content">
                <h2>{movie.title} <span>({movie.release_date})</span></h2>
                <p className="rating">Rating: { movie.vote_average }</p>
                <div className="plot">
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="Movie Poster"/>
                    <p>{ movie.overview }</p>
                </div>
                <button className="close" onClick={closeModal}>Close</button>
            </div>
        </div>
    )
}

export default Modal;
