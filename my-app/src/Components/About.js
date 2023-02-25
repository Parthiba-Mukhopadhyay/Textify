//import React, { useState } from "react";

export default function About(props) {

  let myStyle = {
    color: props.mode === "dark" ? "rgb(229, 249, 255)" : "black",
    backgroundColor: props.mode === "dark" ? "rgb(49, 133, 140)" : "#bed6ec",
    border: "2px solid",
    borderColor: props.mode === "dark" ? "white" : "black"
  };
  let myStyle1 = {
    color: props.mode === "dark" ? "rgb(229, 249, 255)" : "black",
    backgroundColor: props.mode === "dark" ? "rgb(54, 0, 73)" : "rgb(198 242 232)",
    border: "1px solid",
    borderColor: props.mode === "dark" ? "white" : "black"
  };

  return (
    <div className="container" style={{color: props.mode === "dark" ? "white" : "black",
    backgroundColor: props.mode === "dark" ? "rgb(8, 22, 51)" : "rgb(214, 238, 246)"}}>
      <h1 className="my-3">About Textify: Learn more about it</h1>
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
              <strong>Convert to uppercase</strong>
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" style={myStyle1}>
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
              <strong>Convert to lowercase</strong>
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" style={myStyle1}>
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
              <strong>Reverse String</strong>
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" style={myStyle1}>
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
              <strong>Capitalize</strong>
            </button>
          </h2>
          <div
            id="flush-collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingFour"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" style={myStyle1}>
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
          <h2 className="accordion-header" id="flush-headingFive">
            <button
              className="accordion-button collapsed my-2"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseFive"
              aria-expanded="false"
              aria-controls="flush-collapseFive"
            >
              <strong>Remove extra spaces</strong>
            </button>
          </h2>
          <div
            id="flush-collapseFive"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingFive"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" style={myStyle1}>
              <p>
                Extra spaces are the spaces that are inserted by the user by
                mistake and needs to be removed to make the text grammatically
                correct.
              </p>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingSix">
            <button
              className="accordion-button collapsed my-2"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseSix"
              aria-expanded="false"
              aria-controls="flush-collapseSix"
            >
              <strong>Clear text</strong>
            </button>
          </h2>
          <div
            id="flush-collapseSix"
            className="accordion-collapse collapse my-2"
            aria-labelledby="flush-headingSix"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" style={myStyle1}>
              <p>
                In case you have written a big text and need to clear the screen
                and start afresh, instead of deleting each letter one by one
                click of one button removes all
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
