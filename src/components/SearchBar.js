import React from 'react';

const SearchBar = ({input ,onChange}) => {

  return (
    <input 
    className="searchBar"
    //  style={BarStyling}
     key="random1"
     value={input}
     placeholder={"Search Location.."}
     onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default SearchBar