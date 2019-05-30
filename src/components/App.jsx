import React from "react";
import BoxLoader from "./Loader"
import NavBar from "./NavBar"
import SearchBar from "./SearchBar"
import SearchButton from "./SearchButton"

function App() {
  return (
    <>
      <NavBar />
      <br />
      <SearchBar />
      <SearchButton />
      <BoxLoader />
    </>
  );
}

export default App;
