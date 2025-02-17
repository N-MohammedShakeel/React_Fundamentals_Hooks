import { useState } from "react";

const Counter = () => {
  const [count, setcount] = useState(0);

  const increment = () => {
    setcount(count + 1);
  };
  const decrement = () => {
    setcount(count - 1);
  };

  let styleButton = {
    color: "white",
    backgroundColor: "darkblue",
    padding: "10px",
    margin: "5px",
    height: "50px",
    width: "50px",
    fontSize: "20px",
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment} style={styleButton}>
        +
      </button>
      <button onClick={decrement} style={styleButton}>
        -
      </button>
    </div>
  );
};

export default Counter;
