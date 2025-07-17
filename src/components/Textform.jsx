import React, { useState } from "react";

export default function Textform(props) {
  const handleUpperClick = () => {
    // console.log("UperCase was clicked"+text)
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowerClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClearText =() => {
    let newText = "";
    setText(newText);
  };
  const handleOnChange = (event) => {
    //this is allowing us to type in the textarea
    // console.log("onChange");
    setText(event.target.value);
  };
  
  const [text, setText] = useState("");
  return (
    <>
    <div className="container my-3">
    <h2>{props.heading}</h2>
      <div className="my-3">
        <textarea
          className="form-control"
          id="myBox"
          value={text}
          onChange={handleOnChange}
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpperClick}>
        Convert to UpperCase
      </button>
      <button className="btn btn-primary mx-1" onClick={handleLowerClick}>
        Convert to LowerCase
      </button>
      <button className="btn btn-primary mx-1" onClick={handleClearText}>
        Clear Text
      </button>
    </div>
    <div className="container my-3">
        <h3>Your Text Summary</h3>
        <p>{text.split(" ").length} words, {text.length}characters</p>
        <p>{0.008 *text.split(" ").length }Minutes Read</p>
        <h4>Preview</h4>
        <p>{text}</p>
    </div>
      

    </>
  );
}
