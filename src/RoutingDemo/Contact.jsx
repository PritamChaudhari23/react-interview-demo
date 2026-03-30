import React from 'react'
import { useParams } from 'react-router-dom'

const Contact = () => {
    let { contactID } = useParams();
    return <h3>Selected contact: {contactID}</h3>
}

export default Contact