import { useState } from 'react';
import './App.css';
import SearchBar from './Components/SearchBar';

function App() {

  const [query, setQuery]= useState('');

  const queryHandler = (val)=>{
    setQuery(val);
  }

  return (
    <div className="App">
      <h1>Search Bar</h1>
      <h3>Search Query: {query}</h3>
      <SearchBar queryHandler = {queryHandler} />
    </div>
  );
}

export default App;
