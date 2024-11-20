import React, { useState } from "react";
import Add from "../utils";

const StringCalculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleCalculate = () => {
    const value = input.replace(/\\n/g, "\n");
    const result = Add(value);
    console.log({ value });
    console.log({ result });
    setResult(result);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>String Calculator</h1>
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Enter numbers"
        style={styles.input}
      />
      <button onClick={handleCalculate} style={styles.button}>
        Calculate
      </button>
      <div style={styles.resultContainer}>
        <h2>Result: {result}</h2>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    backgroundColor: "#f4f4f9",
    padding: "20px",
    fontFamily: "'Arial', sans-serif",
  },
  header: {
    fontSize: "2rem",
    color: "#333",
    marginBottom: "20px",
  },
  input: {
    width: "300px",
    padding: "10px",
    fontSize: "1rem",
    borderRadius: "5px",
    border: "1px solid #ccc",
    marginBottom: "20px",
    outline: "none",
    transition: "border-color 0.3s",
  },
  inputFocus: {
    borderColor: "#007bff",
  },
  button: {
    padding: "10px 20px",
    fontSize: "1rem",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s, transform 0.3s",
  },
  buttonHover: {
    backgroundColor: "#0056b3",
    transform: "scale(1.05)",
  },
  resultContainer: {
    marginTop: "20px",
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#444",
  },
};

export default StringCalculator;
