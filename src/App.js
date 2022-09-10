import React from "react";
import Header from "./Components/Header";
import Content from "./Components/Content";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="app_sub">
        <Header />
        <Content />
      </div>
    </div>
  );
}

export default App;
