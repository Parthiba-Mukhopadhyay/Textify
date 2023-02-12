import "./App.css";
//import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";

function App() {
  return (
    <>
      <Navbar title="Textify" aboutText="About textutils" />
      <div className="container p-3 mb-2 bg-light text-dark ">
         <Textform/>
      </div>
    </>
  );
}

export default App;
