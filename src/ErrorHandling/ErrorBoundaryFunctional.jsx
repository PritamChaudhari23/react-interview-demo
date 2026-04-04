import React, { useState } from 'react';

function useErrorBoundary() {
    const [error, setError] = useState(null);

    const ErrorBoundary = ({ children }) => {
        if (error) {
            return <div role="alert">Something went wrong: {error.message}</div>;
        }
        return children;
    };

    const handleError = (error) => {
        setError(error);
    };

    return { ErrorBoundary, handleError };
}

export default useErrorBoundary;