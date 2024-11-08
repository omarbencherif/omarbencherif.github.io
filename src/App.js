// src/App.js
import React from "react";
import "./App.css";
import PriceComparison from "./PriceComparison";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Price Comparator</h1>
        <PriceComparison />
      </header>
    </div>
  );
}

export default App;
