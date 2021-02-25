import SearchBarContainer from "./SearchBar/SearchBar";
import Filter from './Filter'
const UpperBar = () => {
  const wrapperStyle = {
    border: "black",
    height: "60px",
    margin: "0px 0 0 50vw",
    border: "solid 2px black",
    width: "32%",
    borderRadius: "5px",
  };
  return (
    <div
      style={{
        width: "100%",
        height: "10vh",
        borderColor: "red",
      }}
    >
      <SearchBarContainer wrapperStyle={wrapperStyle} />
      <Filter/>
    </div>
  );
};

export default UpperBar;
