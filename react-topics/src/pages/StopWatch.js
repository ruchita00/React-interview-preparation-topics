import React, { useEffect, useState } from "react";

const StopWatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
      return () => clearInterval(intervalId);
    } else {
      clearInterval(intervalId);
    }
  });

  const handleStartStop = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };
  const timeFormatter = (time) => {
    let second = time % 60;
    let minutes = Math.floor(time / 60);
    let hours = Math.floor(time / 3600);
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${second.toString().padStart(2, "0")}`;
  };
  return (
    <div>
      <h1>{timeFormatter(time)}</h1>
      <button onClick={handleStartStop}>{isRunning ? "stop" : "start"}</button>
      <button onClick={handleReset}>reset</button>
    </div>
  );
};

export default StopWatch;
