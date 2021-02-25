import { useState, useContext } from "react";
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
  const { addressChosen, setAddressChosen } = useContext(HouseContext);
  const [addresses, setAddresses] = useState([]);
  const handleClick = (address) => {
    setAddressChosen(address);
  };
  return (
    <div style={wrapperStyle}>
      <SearchInput
        placeholder="Enter a french address"
        onChange={async (event) =>
          setAddresses(await fetchAddress(event.target.value, 5))
        }
        // onKey
      />
      <SuggestionContainer>
        {addresses.length > 0
          ? addresses.map((address) => (
              <Suggestion key={address.id} onClick={() => handleClick(address)}>
                {address.label}
              </Suggestion>
            ))
          : null}
      </SuggestionContainer>
    </div>
  );
};

export default SearchBarContainer;
