import React, { useState } from "react";

export default function Textform() {

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
    //event.target basically finds the state that triggered the change while .value allows updation
  };

  const [myText,setMyText]=useState("Set Dark Mode")
  const [myStyle,setMyStyle]=useState({
    color:'black',
    backgroundColor:'white'
  })

const toggleStyle=()=>{
  if(myStyle.color==='white')
  {
    setMyStyle ({
      color:'black',
      backgroundColor:'white'
    })
    setMyText("Enable Dark Mode")
  }
  else{
      setMyStyle ({
        color:'white',
        backgroundColor:'black'
      })
      setMyText("Enable Light Mode")
    }

  }


  const [text, setText] = useState("");
  return (
    <>
      <div className="container" style={myStyle}>
      <h1 className="my-3">Enter text to analyze</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            value={text}
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
        <button
          type="button"
          className="btn btn-primary my-2 mx-2"
          value={text}
          onClick={handlecapClick}
        >
          Capitalize
        </button>
      </div>
      <div className="container my-2" style={myStyle}>
        <h4 className="my-2">Preview</h4>
        <p>{text}</p>
        <h4>Text Analysis</h4>
        <p className="my-1">{text.split(" ").length-1} Words {text.length} Letters</p>
        <p className="my-1">Average time to read the text is {((text.split(" ").length-1)*0.2).toFixed(2)} seconds</p>
      </div> 
      <button onClick={toggleStyle} type="button" className= "btn btn-success btn-sm my-2 mx-2">{myText}</button>
    </>
  );
}
