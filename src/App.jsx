import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
// import { ClassNames } from "@emotion/react";
import Data from "./components/Data";

function App() {
  return (
    <>
      <Header />
      <div className="App">
      <Sidebar />
      <Data />
      </div>
      
    </>
  );
}

export default App;
