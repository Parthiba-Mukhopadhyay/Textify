import React, { useState } from "react";

export default function Textform(props) {

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
    rev=s.split('').reverse().join('')
    setText(rev);
  };

  const handlecapClick = () => {
    console.log("Clicked");
    let s = text;
    const words = s.split(" ");
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].substring(1);}
    setText(words.join(' '));
  };

  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
    //allows updation of the present result with new characters to form a new string.
    //event.target basically finds the state that triggered the change while .value allows updation.
  };

const handlermvspClick=()=>{
  let newtext=text.split(/[ ]+/)
  setText(newtext.join(" "))
}

  const [text, setText] = useState("");
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'#e5f9ff':'black'}}>
      <h1 className="my-3">Enter text to analyze</h1>
        <div>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}}
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
          onClick={handlerevClick}
        >
          Reverse string
        </button>

        <button
          type="button"
          className="btn btn-primary my-2 mx-2"
          value={text}
          onClick={handlecapClick}
        >
          Capitalize
        </button>

        <button
          type="button"
          className="btn btn-primary my-2 mx-2"
          value={text}
          onClick={handlermvspClick}
        >
          Remove extra spaces
        </button>

        <button
          type="button"
          className="btn btn-primary my-2 mx-2"
          value={text}
          onClick={handleclClick}
        >
          Clear text
        </button>
        <br/>
        <h3 className="my-3"><b>Preview</b></h3>
        <p>{text.length>0?text:"Enter something to preview"}</p>
        <h4 className="my-3"><b>Text Analysis</b></h4>
        <p className="my-1">{text.split(" ").length-1} Words {text.length} Letters</p>
        <p className="my-1">Average time to read the text is {((text.split(" ").length-1)*0.2).toFixed(2)} seconds</p>
    </div>
    </>
  );
}
