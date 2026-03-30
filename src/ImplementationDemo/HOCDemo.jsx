import React from 'react'

const HOCDemo = () => {

  const HOC = withGreeting(MyComponent)

  return (
    <div>
      <HOC /> 
    </div>
  )
}

const withGreeting = (WrapperComponent) => {
  return (props) => {
    return (
      <div>
        <h1>Hello from greeting function...</h1>
        <WrapperComponent {...props} />
      </div>
    )
  }
}

const MyComponent = () => {
  return <>
    <p>Hello from my component</p>
  </>
}

export default HOCDemo