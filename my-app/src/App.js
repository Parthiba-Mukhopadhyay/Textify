import "./App.css";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";

function App() {
  return (
    <>
      <Navbar title="Textify" aboutText="About textutils" />
      <div className="container p-3 mb-2 bg-light text-dark ">
        <h3 className="my-3">Enter text to analyze</h3>
        <Textform />
      </div>
    </>
  );
}

export default App;
