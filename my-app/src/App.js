import "./App.css";
//import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";

function App() {
  return (
    <>
      <Navbar title="Textify" aboutText="About textutils" />
        <Textform/>
    </>
  );
}

export default App;
