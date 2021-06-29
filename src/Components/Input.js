import React, { useState } from "react";

const Input = ({showdiv}) => {
  const [searchWord, setSearchWord] = useState();
  return (
    <div>
      <input
        type="text"
        data-testid="searchBar"
        placeholder="Search"
        onChange={(e) => {
          setSearchWord(e.target.value);
        }}
      />
      <h1 data-testid="displaySearch">{searchWord}</h1>

      {showdiv && (
        <div data-testid="divWeWantToShow">Hey my name is Carlos Damian</div>
      )}
    </div>
  );
};

export default Input;
