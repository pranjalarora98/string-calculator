import React, { useState } from "react";
import Add from "../utils";
const StringCalculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const handleInputChange = (event) => {
    setInput(event.target.value);
  };
  const handleCalculate = () => {
    const value = input.replace(/\\n/g, "\n")
    const result = Add(value);
    console.log({value});
    console.log({ result });
    setResult(result);
  };
  return (
    <div>
      <h1>String Calculator</h1>
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Enter numbers"
        style={{ width: "300px", padding: "8px" }}
      />
      <button onClick={handleCalculate}>Calculate</button>
      <div>
        <h2>Result: {result}</h2>
        {error && <h3 style={{ color: "red" }}>{error}</h3>}
      </div>
    </div>
  );
};
export default StringCalculator;