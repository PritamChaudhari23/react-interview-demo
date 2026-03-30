import React, { useState } from 'react'

const BasicFormValidation = () => {

    const initialState = {
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    const [formData, setFormData] = useState(initialState)

    const validateForm = () => {
        if(formData.username.includes('qwerty')) {
            alert('qwerty not allowed in username')
            return false
        }
        if(formData.password != formData.confirmPassword) {
            alert('Passwords do not match')
            return false
        }
        return true
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({...formData, [name]: value})
    }

    const submitForm = (event) => {
        event.preventDefault()
        if (validateForm()) {
            console.log('FORM SUBMITTED SUCCESSFULLY: ', formData)
        } 
    }

    return (
        <form onSubmit={submitForm}>
            <div>
                <label>Username: </label>
                <input name='username' type='text' maxLength={6} required value={formData.username} onChange={handleInputChange} />
            </div>

            <div>
            <label>Email: </label>
                <input name='email' type='email' required value={formData.email} onChange={handleInputChange} />
            </div>

            <div>
            <label>Password: </label>
                <input name='password' type='password' minLength={8} required value={formData.password} onChange={handleInputChange} />
            </div>
            
            <div>
            <label>Confirm password: </label>
                <input name='confirmPassword' required type='password' minLength={8} value={formData.confirmPassword} onChange={handleInputChange} />
            </div>

            <button type='submit'>Submit</button>
        </form>
    )
}

export default BasicFormValidation;