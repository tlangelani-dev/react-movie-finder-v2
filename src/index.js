import React, { StrictMode } from 'react';
import { render } from 'react-dom';
import './sass/index.scss';
import App from './components/App';

render(
    <StrictMode>
        <App />
    </StrictMode>,
    document.getElementById('root')
);
