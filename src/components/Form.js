import React, { useState } from "react";

export default function Form({ theme }) {
  // Declaring textarea value state
  const [text, setText] = useState("");

  // Handling onChnage textarea event
  const handleChangeText = (e) => setText(e.target.value);

  // Function to change into uppercase
  const handleUpCase = () => setText(text.toUpperCase());

  // Function to change into lowercase
  const handleLowCase = () => setText(text.toLowerCase());

  // Function to clear text
  const handleClearText = () => setText("");

  // Function to copy text
  const handleCopyText = () => navigator.clipboard.writeText(text);

  // Function to remove extra-spaces
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" ").trim());
  };

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
          style={{ backgroundColor: theme.bg, color: theme.fg }}
        ></textarea>
      </div>
      <button onClick={handleUpCase} className="m-2 btn btn-outline-primary">
        Upper Case
      </button>
      <button onClick={handleLowCase} className="m-2 btn btn-outline-primary">
        Lower Case
      </button>
      <button onClick={handleClearText} className="m-2 btn btn-outline-primary">
        Clear Text
      </button>
      <button onClick={handleCopyText} className="m-2 btn btn-outline-primary">
        Copy Text
      </button>
      <button
        onClick={handleExtraSpaces}
        className="m-2 btn btn-outline-primary"
      >
        Remove White-spaces
      </button>
      <div className="mb-3">
        <h2>Summary</h2>
        <hr />
        <p>
          {`${text.split(" ").filter((t) => t !== "").length} words & ${
            text.length
          } letters`}
        </p>
        <p>{`${text.length / 10} seconds required to read`}</p>
      </div>
      <div className="mb-3">
        <h2>Preview</h2>
        <hr />
        <p>{text === "" ? "Preview will appear here" : text}</p>
      </div>
    </div>
  );
}
