import React, { useState, useEffect } from "react";

const Debouncing = () => {

    const [isSubmitting, setIsSubmitting] = useState(false)

    useEffect(() => {
        if(isSubmitting) {
            var debounceTimer = setTimeout(() => {
                console.log('Submitting data to server....')
                setIsSubmitting(false)
            }, 2000)    
        }

        return () => {
            clearTimeout(debounceTimer)
        }

    },[isSubmitting])

    return (
        <div>
            <button onClick={() => setIsSubmitting(true)}>Submit data</button>
        </div>
    )
}

export default Debouncing