import React, { useState } from "react"

const Counter = () => {
  const [count, setCount] = useState(0)

  const handleCountIncrement = () => {
    setCount(count => count += 1)
  }

  const handleCountDecrement = () => {
    setCount(count => count -= 1)
  }

  return (
    <div>
      <button onClick={handleCountDecrement}>-</button>
      <p>{count}</p>
      <button onClick={handleCountIncrement}>+</button>
      <ShowCount currentCount={count} />
    </div>
  )
}

const ShowCount = ({currentCount}) => {
  return (
    <p>The count value is: {currentCount}</p>
  )
}

export default Counter