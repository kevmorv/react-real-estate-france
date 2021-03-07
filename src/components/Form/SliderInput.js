import { useState } from "react";
import Slider from "@material-ui/core/Slider";
import { useEffect } from "react";
import "./mystyle.css";

const SliderInput = ({ range, title, step, updateFormState, value }) => {
  const [showValue, setShowValue] = useState([]);

  useEffect(() => {
    const showValueMin = Intl.NumberFormat("fr-FR").format(value[0]);
    const showValueMax = Intl.NumberFormat("fr-FR").format(value[1]);
    setShowValue([showValueMin, showValueMax]);
  }, [value]);

  const updateChange = (event, newValue) => {
    updateFormState(title.toLowerCase(), newValue);
  };
  return (
    <div style={{ display: "grid" }}>
      <h2>{title}</h2>
      <p style={{ fontSize: "22px" }}>
        Between {value[0]} and {value[1]} {title === "Price" ? "€" : "m²"}
      </p>

      <Slider
        value={value}
        onChange={updateChange}
        aria-labelledby="range-slider"
        step={step}
        min={range[0]}
        max={range[1]}
      />
    </div>
  );
};

export default SliderInput;
