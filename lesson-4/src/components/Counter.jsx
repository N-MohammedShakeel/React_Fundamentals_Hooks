import { useContext, useState } from "react";
import { CounterReducer } from "./CounterReducer";

const Counter = () => {
  const { state, dispatch } = useContext(CounterReducer);
  const [amt, setAmt] = useState(0);

  return (
    <div>
      <h1>Count : {Number(state.count)}</h1>

      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>

      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label>Enter number to increment/decrement by:</label>
        <input
          type="number"
          value={amt}
          onChange={(e) => setAmt(Number(e.target.value))}
          placeholder="Enter a number"
        />
        <button
          onClick={() => {
            dispatch({ type: "incrementByAmount", payload: amt });
            setAmt(0);
          }}
        >
          ADD
        </button>
        <button
          onClick={() => {
            dispatch({ type: "decrementByAmount", payload: amt });
            setAmt(0);
          }}
        >
          SUBTRACT
        </button>
      </form>
    </div>
  );
};

export default Counter;
