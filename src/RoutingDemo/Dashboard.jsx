import React from 'react'
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const profile1 = 'Mary Jane';
  const profile2 = 'John Doe';

  const handleProfileClick = () => {
    navigate(`/profile/${encodeURIComponent(profile1)}`)
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={handleProfileClick}>Go to profile</button>
    </div>

  )
}

export default Dashboard