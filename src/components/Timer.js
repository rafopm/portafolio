import React, { useEffect, useRef, useState } from "react";

const Timer = () => {
  const timer = useRef(0);
  const [count, setCount] = useState(1);

  const tick = () => {
    setCount((count) => count + 1);
  };

  const startTimer = () => {
    clearInterval(timer.current);
    timer.current = setInterval(tick, 10);
  };

  if (count === 100) clearInterval(timer.current)

  const stopTimer = () => {
    clearInterval(timer.current);
  };

  const restarTimer = () => {
    setCount(1)
    clearInterval(timer.current);
  };

  useEffect(() => {
    clearInterval(timer.current)
    

    
  }, []);

  return (
    <div className="timer">
      <h1>{count}</h1>
      <div>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={restarTimer}>Reiniciar</button>
      </div>
    </div>
  );
};

export default Timer;
