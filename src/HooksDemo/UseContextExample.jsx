import React, { createContext, useContext } from 'react';
const Context = createContext();

const UseContextExample = () => {
    return (
        <Context.Provider value="Hello from context!">
            <ContextConsumer />
        </Context.Provider>
    )
}

function ContextConsumer() {
    const value = useContext(Context);
    return (
        <div>
            <h1>useContext Example</h1>
            <p>Context Value: {value}</p>
        </div>
    );
}

export default UseContextExample