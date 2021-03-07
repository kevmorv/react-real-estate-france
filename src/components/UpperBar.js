import SearchBarContainer from "./SearchBar/SearchBar";
import Filter from './Filter'
const UpperBar = () => {
  const wrapperStyle = {
    border: "black",
    height: "7vh",
    margin: "0 0 0 50vw",
    border: "solid 2px black",
    width: "24vw",
    borderRadius: "5px",

    position: "relative"
    
  };
  return (
    <div
      style={{
        alignItems: "center",
        boxSizing: "content-box",
        width: "100%",
        height: "10vh",
        borderColor: "red",
        backgroundColor:"#dad7cd",
        display:"flex",
        justifyContent:"end"
      }}
    >
      {/* <SearchBarContainer wrapperStyle={wrapperStyle} /> */}
      <Filter/>
    </div>
  );
};

export default UpperBar;
