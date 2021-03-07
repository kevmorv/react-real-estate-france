import React, {useState } from "react";

import { GlobalStyle } from "./App.styles";
import LandingPage from "./components/LandingPage";
import Map from "./components/Map";
import UpperBar from "./components/UpperBar";

import GlobalState, { HouseContext } from "./context/GlobalState";

const App = () => {
  const [isSearchOpen, setSearchOpen] = useState(true);
  return (
    <GlobalState>
      <GlobalStyle />
      { isSearchOpen ?
      <LandingPage setSearchOpen={setSearchOpen} /> :
      <>
        <UpperBar />
        <Map />
      </>
}
    </GlobalState>
  );
};

export default App;
