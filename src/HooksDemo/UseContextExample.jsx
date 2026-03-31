import { createContext, useContext, useState } from "react";

const SomeContext = createContext(null);

function SomeProvider({ children }) {
  const [state, setState] = useState(0);

  const setValue = (value) => setState(value);
  const resetValue = () => setState(0);

  return (
    <SomeContext.Provider value={{ state, setValue, resetValue }}>
      {children}
    </SomeContext.Provider>
  );
}

function useSome() {
  const context = useContext(SomeContext);
  if (!context) {
    throw new Error("useSome must be in SomeProvider");
  }
  return context;
}

// --------------------------------------------------------------------------
function Counter() {
  const { state } = useSome();

  return <h2>Count: {state}</h2>;
}

// --------------------------------------------------------------------------
function Controls() {
  const { state, setValue, resetValue } = useSome();

  return (
    <div>
      <button onClick={() => setValue(state + 1)}>+</button>
      <button onClick={() => setValue(state - 1)}>-</button>
      <button onClick={resetValue}>Reset</button>
    </div>
  );
}

export { SomeProvider, Counter, Controls };