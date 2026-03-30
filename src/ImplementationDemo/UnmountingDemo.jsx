import React, { useEffect } from 'react'

const UnmountingDemo = () => {

  useEffect(() => {
    console.log('Component Mounted...');

    const timer = setTimeout(() => {
      console.log('Fetching data from server...');
    }, 2000)

    return () => {
      clearTimeout(timer);
      console.log('Component Unmounted...')
    }

  }, [])

  return (
    <div>UnmountingDemo</div>
  )
}

export default UnmountingDemo