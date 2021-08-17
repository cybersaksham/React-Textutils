import React, { useState } from "react";

export default function Form() {
  // Declaring textarea value state
  const [text, setText] = useState("");

  // Handling onChnage textarea event
  const handleChangeText = (e) => setText(e.target.value);

  // Function to change into uppercase
  const handleUpCase = () => setText(text.toUpperCase());

  // Function to change into lowercase
  const handleLowCase = () => setText(text.toLowerCase());

  return (
    <div className="container my-3">
      <div className="mb-3">
        <label htmlFor="myText" className="form-label">
          Enter Text here
        </label>
        <textarea
          value={text}
          onChange={handleChangeText}
          className="form-control"
          id="myText"
          rows="10"
          placeholder="Enter here"
        ></textarea>
      </div>
      <button onClick={handleUpCase} className="m-2 btn btn-primary">
        Upper Case
      </button>
      <button onClick={handleLowCase} className="m-2 btn btn-primary">
        Lower Case
      </button>
    </div>
  );
}
