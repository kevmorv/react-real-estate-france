//Styles
import { useLayoutEffect, useContext, useRef } from "react";
import RoomIcon from "@material-ui/icons/Room";
import { HouseContext } from "../context/GlobalState";

import {
  Wrapper,
  CityLink,
  ExamplesWrapper,
  Hero,
  LandingWrapper,
  Container,
} from "./LandingPage.styles";
import SearchBarContainer from "./SearchBar/SearchBar";

const LandingPage = ({ setSearchOpen }) => {
  const { addressChosen, setAddressChosen } = useContext(HouseContext);
  const firstUpdate = useRef(true);
  const exampleCities = [
    { id: 1, name: "Paris", lat: 48.8579, long: 2.295 },
    { id: 4, name: "Nice", lat: 43.698, long: 7.2699 },
    { id: 2, name: "Lyon", lat: 45.776, long: 4.859 },
    { id: 3, name: "Montpellier", lat: 43.60853, long: 3.88006 },
  ];
  const wrapperStyle = {
    border: "black",
    height: "60px",
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
  }, [addressChosen]);
  return (
    <Container>
      <LandingWrapper>
        <Hero>
            Looking for the price of real estate in France?
        </Hero>

        <Wrapper>
          <SearchBarContainer wrapperStyle={wrapperStyle} />
        </Wrapper>
        <ExamplesWrapper>
          Try me:
          {exampleCities.map((city) => (
            <div key={city.id} style={{display:'inline', cursor:'pointer'}} onClick={()=>setAddressChosen(city)}>
              <RoomIcon />
              <CityLink>
                {city.name}
              </CityLink>
            </div>
          ))}
        </ExamplesWrapper>
      </LandingWrapper>
    </Container>
  );
};

export default LandingPage;
