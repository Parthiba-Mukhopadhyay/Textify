import React, { useState } from "react";

export default function Textform() {
  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
    //allows updation of the present result with new characters to form a new string.
    //event.target basically finds the state that triggered the change while .value allows updation
  };

  const handleUpClick = () => {
    console.log("Clicked");
    let s = text;
    s = s.toUpperCase();
    setText(s);
  };

  const handleLoClick = () => {
    console.log("Clicked");
    let s = text;
    s = s.toLowerCase();
    setText(s);
  };

  const handleclClick = () => {
    console.log("Clicked");
    let s = text;
    s = "";
    setText(s);
  };

  const handlerevClick = () => {
    console.log("Clicked");
    let s = text;
    let rev="";
    let l=s.length();
    let i=0;
    while(i<l)
    {
      rev=s[i]+rev;
      i++;
    }
    setText(rev);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            //defaultValue={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button
          type="button"
          className="btn btn-primary my-2 mx-2"
          value={text}
          onClick={handleUpClick}
        >
          Convert to uppercase
        </button>
        <button
          type="button"
          className="btn btn-primary my-2 mx-2"
          value={text}
          onClick={handleLoClick}
        >
          Convert to lowercase
        </button>
        <button
          type="button"
          className="btn btn-primary my-2 mx-2"
          value={text}
          onClick={handleclClick}
        >
          Clear text
        </button>
        <button
          type="button"
          className="btn btn-primary my-2 mx-2"
          value={text}
          onClick={handlerevClick}
        >
          Reverse string
        </button>
      </div>
      <div className="container my-2">
        <h4 className="my-2">Preview</h4>
        <p>{text}</p>
        <h4>Text Analysis</h4>
        <p className="my-1">{text.split(" ").length-1} Words {text.length} Letters</p>
        <p className="my-1">Average time to read the text is {(text.split(" ").length-1)*0.2} seconds</p>
      </div>
    </>
  );
}
