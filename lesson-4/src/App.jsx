import Counter from "./components/Counter";
import { CounterProvider } from "./components/CounterReducer";

const App = () => {
  return (
    <CounterProvider>
      <Counter />
    </CounterProvider>
  );
};

export default App;
