import { useState, useMemo } from "react";

function UseMemoExample() {
  const [num, setNum] = useState(2);
  const [count, setCount] = useState(0);

  const square = useMemo(() => {
    console.log("Calculating...");
    return num * num;
  }, [num]);

  return (
    <div>
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(Number(e.target.value))}
      />

      <h3>Square: {square}</h3>

      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
    </div>
  );
}

export default UseMemoExample;