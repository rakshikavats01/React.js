import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
//basically we are selecting an element from the html
//react creats its own DOM as well-ReactDOM
root.render(
    <App/>//custom tags we can create using react
    //react-script:-loads the js in html
);

