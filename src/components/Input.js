import { useState } from "react";
const Input = ({
  label,
  inputCss,
  labelCss,
  pCss,
  propValue,
  setPropValue,
}) => {
  const [value, setValue] = useState("");
  return (
    <label className={labelCss}>
      <p className={pCss}>{label}</p>
      <input
        className={inputCss}
        type="text"
        value={(propValue && propValue) || value}
        onChange={(e) =>
          (propValue && setPropValue(e.target.value)) ||
          setValue(e.target.value)
        }
      ></input>
    </label>
  );
};

export default Input;
