import React, { useState } from "react";

export default function About() {
  //set up a statehook for the colour of text and background for light to dark and vice versa
  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
    border: "1px solid black",
  });
  //create a state hook for the text to change it from change to dark mode to change to light mode with each transition
  const [myText, setMyText] = useState("Enable Dark Mode");
  const toggleStyle = () => {
    if (myStyle.color === "white") {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
        border: "1px solid black",
      });
      setMyText("Enable Dark Mode");
    } else {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
        border: "1px solid white",
      });
      setMyText("Enable Light Mode");
    }
  };

  return (
    <div className="container" style={myStyle}>
      <h2 className="my-3">About Textify: Learn more about it</h2>
      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingOne">
            <button
              className="accordion-button collapsed my-2"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              Convert to uppercase
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" style={myStyle}>
              <p>
                Alternatively known as caps and capital, and sometimes
                abbreviated as UC, uppercase is a typeface of larger characters.
                For example, typing a, b, and c shows lowercase, and typing A,
                B, and C shows uppercase. To type in uppercase, you can use
                either the Caps Lock key or the Shift key on the keyboard.
              </p>
              <p>
                <b>NOTE THAT: </b>It's bad etiquette to have everything you type
                in ALL UPPERCASE CHARACTERS. When reading anything typed in all
                caps, most readers assume you are YELLING or find the text hard
                to read.
              </p>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingTwo">
            <button
              className="accordion-button collapsed my-2"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              Convert to lowercase
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" style={myStyle}>
              <p>
                Sometimes abbreviated as LC, lowercase is a typeface of small
                characters. For example, a, b, and c is lowercase and A, B, and
                C is uppercase. As long as the Shift key is not being pressed
                and the Caps lock is not active everything typed is in
                lowercase.
              </p>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingThree">
            <button
              className="accordion-button collapsed my-2"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              Reverse String
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" style={myStyle}>
              <p>
                Reversing a string is the technique that reverses or changes the
                order of a given string so that the last character of the string
                becomes the first character of the string and so on.
              </p>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingFour">
            <button
              className="accordion-button collapsed my-2"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseFour"
              aria-expanded="false"
              aria-controls="flush-collapseFour"
            >
              Capitalize
            </button>
          </h2>
          <div
            id="flush-collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingFour"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" style={myStyle}>
              <p>
                In writing, capitalization is the use of capital letters as a
                type of punctuation. When we say that something is “
                capitalized,” it means that the first letter of the word or
                words is a capital
              </p>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingFour">
            <button
              className="accordion-button collapsed my-2"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseFour"
              aria-expanded="false"
              aria-controls="flush-collapseFour"
            >
              Remove extra spaces
            </button>
          </h2>
          <div
            id="flush-collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingFour"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" style={myStyle}>
              <p>
                Extra spaces are the spaces that are inserted by the user by
                mistake and needs to be removed to make the text grammatically
                correct.
              </p>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingFour">
            <button
              className="accordion-button collapsed my-2"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseFour"
              aria-expanded="false"
              aria-controls="flush-collapseFour"
            >
              Clear text
            </button>
          </h2>
          <div
            id="flush-collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingFour"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" style={myStyle}>
              <p>
                In case you have written a big text and need to clear the screen
                and start afresh, instead of deleting each letter one by one
                click of one button removes all
              </p>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={toggleStyle}
        type="button"
        className="btn btn-secondary btn-sm my-3"
      >
        {myText}
      </button>
    </div>
  );
}
