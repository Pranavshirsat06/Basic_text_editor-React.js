// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import { useState } from "react";
// import About from "./components/About";

function App() {
  const [mode, setmode] = useState("light");
  const togglemode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#042743";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <>
      <Navbar title="P.Editor" mode={mode} togglemode={togglemode} />
      <div className="container my-3">
        <Form heading="Enter a text to analyze: " mode={mode} />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
