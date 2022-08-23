import { useState } from "react";
const Input = ({ label }) => {
  const [value, setValue] = useState("");
  return (
    <label>
      {label}
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></input>
    </label>
  );
};

export default Input;
