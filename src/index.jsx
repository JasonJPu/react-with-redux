import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = process.env.API_KEY;

// Create a new component. Should produce HTML
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};

// Take component's HTML and put in DOM
ReactDOM.render(<App />, document.querySelector('.container'));
