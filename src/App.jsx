import "./App.css";
import { increment, decrement } from "./store/counterSlice";
import { useSelector, useDispatch } from "react-redux";

function App() {
  // Child component: Counter rDisplay
  const CounterDisplay = () => {
    const count = useSelector((state) => state.counter.value);
    return (
      <div>
        <h2>Counter Display <span className="component-type">(I am the child 1)</span> </h2>
        <p><b>Counter value: {count}</b></p>
      </div>
    );
  };

  // Child component: CounterControls
  const CounterControls = () => {
    const dispatch = useDispatch();
    return (
      <div>
        <h2>Counter Controls<span className="component-type">(I am the child 2)</span></h2>
        <button onClick={() => dispatch(increment(1))}>Increment</button>
        <button onClick={() => dispatch(decrement(1))}>Decrement</button>
      </div>
    );
  };

  return (
    <>
      <h2>Redux Toolkit Implementation <span className="component-type">(I am the parent component)</span> </h2>
      <CounterDisplay />
      <CounterControls />
    </>
  );
}

export default App;
