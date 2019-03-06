import React from "react";

const Input = ({ bpm, handleChange }) => (
  <input type="range" min="30" max="300" defaultValue={bpm} onChange={handleChange} />
);

export default Input;
