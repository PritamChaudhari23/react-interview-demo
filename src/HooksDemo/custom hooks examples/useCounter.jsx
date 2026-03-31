import { useState } from "react";

// Custom Hook: useCounter
// Manages a counter with increment, decrement, and reset functionality
const useCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(initialValue);

  return { count, increment, decrement, reset };
};

// Demo Component
export default function UseCounterExample() {
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>
      <h2>useCounter Hook Example</h2>
      <p style={{ fontSize: "24px", fontWeight: "bold" }}>Count: {count}</p>
      <button onClick={increment} style={{ marginRight: "10px", padding: "10px 20px" }}>
        Increment
      </button>
      <button onClick={decrement} style={{ marginRight: "10px", padding: "10px 20px" }}>
        Decrement
      </button>
      <button onClick={reset} style={{ padding: "10px 20px" }}>
        Reset
      </button>
    </div>
  );
}
