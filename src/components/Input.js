import { useState } from "react";
const Input = ({ label, inputCss, labelCss, pCss, name }) => {
  const [value, setValue] = useState("");
  return (
    <label className={labelCss}>
      <p className={pCss}>{label}</p>
      <input
        className={inputCss}
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        name={name}
      ></input>
    </label>
  );
};

export default Input;
