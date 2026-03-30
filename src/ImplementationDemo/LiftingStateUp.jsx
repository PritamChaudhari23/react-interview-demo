import React, { useState } from 'react'

const LiftingStateUp = () => {

  const [sharedState, setSharedState] = useState('')

  return (
    <div>
      <ChildA sharedState={sharedState} setSharedState={setSharedState} />
      <ChildB sharedState={sharedState} />
    </div>
  )
}


const ChildA = (props) => {

  const { sharedState, setSharedState } = props

  const handleChange = (event) => {
    setSharedState(event.target.value)
  }

  return <>
    <input value={sharedState} onChange={handleChange} />
    <p>Child A: {sharedState}</p>
  </>
}

const ChildB = (props) => {

  const { sharedState } = props

  return <>
    <p>Child B: {sharedState}</p>
  </>
}

export default LiftingStateUp