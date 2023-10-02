import React, { useState } from "react";
const currTime = new Date().toLocaleTimeString();
const App = () => {
  const [time, setTime] = useState(currTime);
  const changeTime = () => {
    setTime(new Date().toLocaleTimeString());
  }
  return (
    <>

      <h1>{time} Am</h1>
      <button onClick={changeTime}>Get Time</button>

    </>
  )
}

export default App;