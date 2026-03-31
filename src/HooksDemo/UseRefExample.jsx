import React, { useState, useEffect, useRef } from 'react'
function UseRefExample() {
  const [count, setCount] = useState(0);
  const renderCount = useRef(0);
  
  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });
  
  return (
    <div>
      <p>Count: {count}</p>
      <p>Renders: {renderCount.current}</p>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
    </div>
  );
}

// -------------------------------------------------------------------------------

const Input = React.forwardRef((props, ref) => {
  return <input ref={ref} {...props} />;
});

const UseRefExample02 = () => {
 const inputRef = React.useRef(null);

  const clearInput = () => {
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  return (
    <div>
      <Input
        type="text"
        ref={inputRef}
        placeholder="Type something here...."
      />
      <button onClick={clearInput}>Clear input</button>
    </div>
  );
}

export { UseRefExample, UseRefExample02 };