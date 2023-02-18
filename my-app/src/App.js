import React, { useState } from "react";
import "./App.css";
//import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";

function App() {
  const[mode,setMode]=useState('light');
  const toggleMode=()=>{
    if(mode==='light')
    {
      setMode('dark')
      document.body.style.backgroundColor='#081633';
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='rgb(214 238 246)';
    }
  }
  return (
    <>
      <Navbar title="Textify" toggleMode={toggleMode} mode={mode} aboutText="About Textify" />
        <Textform mode={mode}/>
    </>
  );
}

export default App;
