import React, { useState } from "react";
// import styled from "styled-components";
import PropTypes from "prop-types";

export default function Form(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked!!" + text);
    let newtext = text.toUpperCase();
    settext(newtext);
  };
  const handleLoClick = () => {
    // console.log("Uppercase was clicked!!" + text);
    let newtext = text.toLowerCase();
    settext(newtext);
  };
  const handleClearClick = () => {
    // console.log("Uppercase was clicked!!" + text);
    let newtext = "";
    settext(newtext);
  };
  const handleUndoClick = () => {
    // console.log("Uppercase was clicked!!" + text);
    let newtext = { text };
    settext(newtext);
  };
  const handleOnChange = (event) => {
    // console.log("On change");
    settext(event.target.value);
  };

  const [text, settext] = useState("");
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>
          Clear
        </button>
        {/* <button className="btn btn-primary mx-1" onClick={handleUndoClick}>
          Undo
        </button> */}
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
        }}
      >
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in textbox to preview it here"}
        </p>
      </div>
    </>
  );
}
