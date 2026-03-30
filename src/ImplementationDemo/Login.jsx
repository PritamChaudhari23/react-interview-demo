// APPROACH 1
import React, { useState } from 'react'

const Login = () => {

    const initialState = {
        'username': '',
        'password': ''
    }

    const [userCredentials, setUserCredentials] = useState(initialState)

    const handleFormSubmit = (event) => {
        event.preventDefault()
        console.log(`USERNAME: ${userCredentials.username} & Password: ${userCredentials.password}`)
    }

    const handleInputChange = event => {
        const { name, value } = event.target;
        setUserCredentials({ ...userCredentials, [name]: value })
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <div>
                <div>
                    <label>Username</label>
                    <input name='username' value={userCredentials.username} onChange={handleInputChange} required type='text' />
                </div>
                <div>
                    <label>Password</label>
                    <input name='password' value={userCredentials.password} onChange={handleInputChange} required type='password' />
                </div>
            </div>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default Login

//----------------------------------------------------------------------------------------------
// APPROACH 2

// import React, { useState } from 'react'

// const Login = () => {
//     const [username, setUsername] = useState('')
//     const [password, setPassword] = useState('')

//     const handleFormSubmit = (event) => {
//         event.preventDefault()
//         console.log(`USERNAME: ${username} & Password: ${password}`)
//     }

//     return (
//         <form onSubmit={handleFormSubmit}>
//             <div>
//                 <div>
//                     <label>Username</label>
//                     <input name='username' value={username} onChange={(e) => { setUsername(e.target.value) }} required type='text' />
//                 </div>
//                 <div>
//                     <label>Password</label>
//                     <input name='password' value={password} onChange={(e) => { setPassword(e.target.value) }} required type='password' />
//                 </div>
//             </div>
//             <button type='submit'>Submit</button>
//         </form>
//     )
// }

// export default Login

//----------------------------------------------------------------------------------------------
// APPROACH 3

// import React from 'react'

// const Login = () => {

//     const handleFormSubmit = (event) => {
//         event.preventDefault()
//         const formdata = new FormData(event.target)
//         console.log(`USERNAME: ${formdata.get('username')} & Password: ${formdata.get('password')}`)
//     }

//     return (
//         <form onSubmit={handleFormSubmit}>
//             <div>
//                 <div>
//                 <label>Username</label>
//             <input name='username' required type='text' />
//                 </div>
//                 <div>
//                 <label>Password</label>
//             <input name='password' required type='password' />
//                 </div>
//             </div>
//             <button type='submit'>Submit</button>
//         </form>
//     )
// }

// export default Login
//----------------------------------------------------------------------------------------------
