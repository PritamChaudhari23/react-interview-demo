import React, { useState, useEffect, useRef } from 'react'

function UseRefExample() {
  const inputRef = useRef(null);

  function handleFocus() {
    inputRef.current.focus()
  }

  return (
    <>
      <input ref={inutRef} type="text" placeholder="Type something here...." />
      <button onClick={handleFocus}>FocusInput</button>
    </>
  )
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