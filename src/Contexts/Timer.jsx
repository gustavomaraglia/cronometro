import { useState, createContext, useEffect } from "react";

export const TimerContext = createContext({});

export const TimerProvider = (props) => {
  const [time, setTime] = useState(0);
  const [intervalCount, setIntervalCount] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime + 5);
    }, 5); 

    setIntervalCount(interval);

    return () => clearInterval(interval);
  }, []);

  const pause = () => {
    clearInterval(intervalCount);
  }

  return (
    <TimerContext.Provider value={{ time, setTime, pause }}>
      { props.children }
    </TimerContext.Provider>
  )
}