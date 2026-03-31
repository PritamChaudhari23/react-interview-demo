import React, { useState } from "react";

const Child = React.memo(({ value }) => {
  console.log('Child renders');
  return <div>Value: {value}</div>;
});

function ReactMemoExample() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('hello');
  
  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>Count: {count}</button>
      <Child value={text} />
    </div>
  );
}

export default ReactMemoExample;