import React, { useState } from "react";
import "./index.css";

const App = () => {
  let time = new Date().toLocaleTimeString();
  let [ntime, setNtime] = useState(time);
  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    setNtime(time);
  };
  setInterval(UpdateTime, 1000);
  return (
    <div className="star">
      <h1> {ntime} </h1>
    </div>
  );
};
export default App;
