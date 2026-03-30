import React, { useState, useEffect } from 'react'

const UseEffectExample = () => {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
        console.log('Component mounted or count changed:', count);
        return () => {
            console.log('Cleanup for count:', count);
        };
    }, [count]);

    return (
        <div>
            <h1>useEffect Example</h1>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment Count</button>
        </div>
    );
}

export default UseEffectExample