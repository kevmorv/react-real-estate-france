//Styles
import { useLayoutEffect, useContext, useRef } from "react";

import { HouseContext } from "../context/GlobalState";

import { Wrapper } from "./LandingPage.styles";
import SearchBarContainer from "./SearchBar/SearchBar";

const LandingPage = ({ setSearchOpen }) => {
  const { addressChosen } = useContext(HouseContext);
  const firstUpdate = useRef(true);
  const wrapperStyle = {
    border: "black",
    height: "60px",
    margin: "0 auto",
    border: "solid 2px black",
    width: "50%",
    borderRadius: "5px",
  };
  useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    setSearchOpen(false);
    console.log("componentDidUpdateFunction");
  }, [addressChosen]);
  return (
    <Wrapper>
      <SearchBarContainer wrapperStyle={wrapperStyle} />
    </Wrapper>
  );
};

export default LandingPage;
