import React, { useCallback, useState } from 'react'

const UseCallbackExample = () => {

    const [count, setCount] = useState(0)
    const [step, setStep] = useState(1)

    const incrementCount = useCallback(() => {
        setCount(prevCount => prevCount + step)
    }, [step]);

  return (
    <div>
        <p>Count: {count}</p>
        <input type='number' value={step} onChange={e => setStep(e.target.value && parseInt(e.target.value))} />
        <button onClick={incrementCount}>Increment</button>
    </div>
  )
}

export default UseCallbackExample