import { createContext, useReducer } from "react";

const CounterReducer = createContext();

const CounterProvider = ({ children }) => {
  const initialState = { count: 0 };

  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };

      case "decrement":
        return { count: state.count - 1 };

      case "incrementByAmount":
        return { count: state.count + action.payload };

      case "decrementByAmount":
        return { count: state.count - action.payload };

      case "reset":
        return { count: 0 };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CounterReducer.Provider value={{ state, dispatch }}>
      {children}
    </CounterReducer.Provider>
  );
};

export { CounterProvider, CounterReducer };
