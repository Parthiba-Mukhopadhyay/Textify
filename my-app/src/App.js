import React, { useState } from "react";
import "./App.css";
import About from "./Components/About";

import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
import Alert from "./Components/Alert";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  // const clearClass=()=>{
  //   document.body.classList.remove('bg-light')
  //   document.body.classList.remove('bg-dark')
  //   document.body.classList.remove('bg-danger')
  //   document.body.classList.remove('bg-success')
  // }

  const toggleMode = () => {
    // clearClass();
    // document.body.classList.add('bg-'+cls)
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#081633";
      showAlert("Set to dark mode", "Success");
      document.title = "Textify- Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "rgb(214 238 246)";
      showAlert("Set to light mode", "Success");
      document.title = "Textify- Light Mode";
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="Textify"
          toggleMode={toggleMode}
          mode={mode}
          aboutText="About Textify"
        />
        <Alert alert={alert} />
        <Switch>
          <Route path="/About">
            <About mode={mode}/>
          </Route>
          <Route path="/">
            <Textform mode={mode} showAlert={showAlert} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
