import React from "react";

export default function Form() {
  return (
    <div className="container my-3">
      <div className="mb-3">
        <label htmlFor="myText" className="form-label">
          Enter Text here
        </label>
        <textarea className="form-control" id="myText" rows="10"></textarea>
      </div>
      <button className="btn btn-primary">Upper Case</button>
    </div>
  );
}
