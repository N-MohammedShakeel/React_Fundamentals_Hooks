import { useState, useEffect, useRef } from "react";

const Timer = () => {
  const ref = useRef(null);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    ref.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);

    return () => {
      clearInterval(ref.current);
    };
  }, []);

  return (
    <div>
      <h1>Timer: {timer}</h1>
      <button onClick={() => clearInterval(ref.current)}>Stop</button>
    </div>
  );
};

export default Timer;
