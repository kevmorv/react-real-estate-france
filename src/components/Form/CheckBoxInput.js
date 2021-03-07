import "./styles.css";

const CheckBoxInput = ({ title, options, value, updateFormState }) => {
  const handleChange = (e) => {
    const field = e.target.name;

    updateFormState(field, e.target.value);
  };
  const formatLabel = (option) => {
    if (option === 5) {
      return "5 rooms or more";
    } else if (option > 1) {
      return option + " rooms";
    }
    return option + " room";
  };
  return (
    <div className="checkboxes-wrapper">
      <h2>{title}</h2>
      {options.length > 2 ? (
        <div className="checkboxes">
          {options.map((option) => (
            <div key={option} style={{ flexBasis: "50%" }}>
              <label className="container">
                {formatLabel(option)}
                <input
                  name="nbrePieces"
                  value={option}
                  onChange={handleChange}
                  checked={value.includes(option)}
                  type="checkbox"
                />
                <span className="checkmark"></span>
              </label>
            </div>
          ))}
        </div>
      ) : (
        <div>
          {options.map((option) => (
            <div key={option} style={{ maxWidth: "100%" }}>
              <label className="container">
                {option}
                <input
                  name="typeProperties"
                  value={option}
                  onChange={handleChange}
                  type="checkbox"
                  checked={value.includes(option)}
                />
                <span className="checkmark"></span>
              </label>
            </div>
          ))}
        </div>
      )}

      <div></div>
    </div>
  );
};

export default CheckBoxInput;
