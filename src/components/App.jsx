import axios from 'axios';
import React, { useState } from 'react';
import Modal from './Modal';
import Movies from './Movies';
import Search from './Search';

const App = () => {
    const [state, setState] = useState({
        search: '',
        results: [],
        selectedMovie: {}
    });
    const apiKey = process.env.REACT_APP_API_KEY;
    const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&page=1&include_adult=false`;
    const handleInput = (e) => {
        let search = e.target.value;
        setState(prevState => {
            return {
                ...prevState,
                search
            }
        });
    };
    const search = (e) => {
        if (e.key === 'Enter') {
            axios(`${apiUrl}&query=${state.search}`).then(({data}) => {
                let results = data.results;
                setState(prevState => {
                    return {
                        ...prevState,
                        results
                    }
                });
            });
        }
    };

    const openModal = id => {
        axios(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`).then(({data}) => {
            console.log(data);
            setState(prevState => {
                return {
                    ...prevState,
                    selectedMovie: data
                }
            });
        });
    };

    const closeModal = () => {
        setState(prevState => {
            return {
                ...prevState,
                selectedMovie: {}
            }
        });
    };

    return (
        <div className="app-cp">
            <header>
                <h1>Movie Finder <small>by Tlangelani</small></h1>
            </header>
            <main>
                <Search handleInput={handleInput} search={search} />
                <Movies movies={state.results} openModal={openModal} />
                {(typeof state.selectedMovie.title != 'undefined') ? <Modal movie={state.selectedMovie} closeModal={closeModal} /> : false}
            </main>
        </div>
    )
}

export default App;
