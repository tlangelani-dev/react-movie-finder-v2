import React from 'react';

const Search = ({handleInput, search}) => {
    return (
        <div className="search-cp">
            <input 
                type="text"
                placeholder="Find a movie..."
                onChange={handleInput}
                onKeyPress={search}
            />
        </div>
    )
}

export default Search;
