import React from 'react';
import Search from './Search';

const App = () => {
    return (
        <div className="app-cp">
            <header>
                <h1>Movie Finder <small>by Tlangelani</small></h1>
            </header>
            <main>
                <Search />
            </main>
        </div>
    )
}

export default App;
