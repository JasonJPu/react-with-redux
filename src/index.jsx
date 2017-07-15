import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const API_KEY = process.env.GOOGLE_API;

YTSearch({ key: API_KEY, term: 'surfboards' }, function(data) {
  console.log(data);
});

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
