import React, { useState } from "react";
import "./index.css";

const App = () => {
  const [count, setCount] = useState(0);//array destruction

  const IncNum = () => {
    setCount(count + 1);
  }

  return (
    <div className="app-container">
      <h1 className="title">{count}</h1>
      <button onClick={IncNum} className="button">Click Me</button>
    </div>
  );
};

export default App;
