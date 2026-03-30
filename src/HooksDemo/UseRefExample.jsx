import React, { useRef } from 'react'

const UseRefExample = () => {
  const inputRef = useRef(null);

  const clearInput = () => {
    if(inputRef.current) {
      inputRef.current.value = ''
    }
  };

  return (
    <div>
      <input type='text' ref={inputRef} placeholder='Type something here....' />
      <button onClick={clearInput}>Clear input</button>
    </div>
  )
}

export default UseRefExample