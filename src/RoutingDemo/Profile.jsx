import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const Profile = () => {
    const { username } = useParams();
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate(-1)
    }

    return (
        <div>
            <h1>Welcome {decodeURIComponent(username)}</h1>
            <button onClick={handleBackClick}>Go back</button>
        </div>
    )
}

export default Profile