import { useState, useContext, useRef } from "react";
import { HouseContext } from "../../context/GlobalState";
//Styles
import {
  SearchInput,
  SuggestionContainer,
  Suggestion,
} from "./SearchBar.styles";

//utils
import { fetchAddress } from "../../api";

const SearchBarContainer = ({ wrapperStyle }) => {
  const { setAddressChosen } = useContext(HouseContext);
  const [addresses, setAddresses] = useState([]);
  const focusPoint = useRef(null);

  const handleClick = (address) => {
    setAddressChosen(address);
  };
  return (
    <div style={wrapperStyle}>
      <SearchInput
        placeholder="Enter a french address"
        onBlur={(e) => {
          e.relatedTarget !== focusPoint.current
            ? setAddresses([])
            : console.log();
        }}
        onChange={async (event) => {
          setAddresses(await fetchAddress(event.target.value, 5));
        }}
      />
      <SuggestionContainer tabIndex="0" ref={focusPoint}>
        {addresses.length > 0
          ? addresses.map((address) => (
              <Suggestion
                key={address.id}
                onClick={(e) => {
                  handleClick(address);
                }}
              >
                {address.label}
              </Suggestion>
            ))
          : null}
      </SuggestionContainer>
    </div>
  );
};

export default SearchBarContainer;
