import React, { useState } from "react";
import "./App.css";
//import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
import Alert from "./Components/Alert";

function App() {
  const[mode,setMode]=useState('light');
  const[alert,setAlert]=useState(null);

const showAlert=(message,type)=>
{
  setAlert({
    msg: message,
    type: type
  })
  setTimeout(()=>{
    setAlert(null);
  }, 1500);
}

  const toggleMode=()=>{
    if(mode==='light')
    {
      setMode('dark')
      document.body.style.backgroundColor='#081633';
      showAlert("Set to dark mode","Success");
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='rgb(214 238 246)';
      showAlert("Set to light mode","Success");
    }
  }
  return (
    <>
      <Navbar title="Textify" toggleMode={toggleMode} mode={mode} aboutText="About Textify" />
        <Alert alert={alert}/>
        <Textform mode={mode} showAlert={showAlert}/>
    </>
  );
}

export default App;
