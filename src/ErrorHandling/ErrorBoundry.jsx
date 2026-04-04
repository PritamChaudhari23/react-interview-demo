import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
            errorInfo: null,
        };
    }

    static getDerivedStateFromError(error) {
        // Update state to indicate that an error has occurred
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // You can log the error to an external service
        console.error('Error caught by ErrorBoundary:', error);
        console.error('Error info:', errorInfo);
        this.setState({
            error,
            errorInfo,
        });
    }

    render() {
        if (this.state.hasError) {
            // Render a fallback UI when an error is caught
            return (
                <div>
                    <h1>Something went wrong.</h1>
                    <details style={{ whiteSpace: 'pre-wrap' }}>
                        {this.state.error && this.state.error.toString()}
                        <br />
                        {this.state.errorInfo
                            ? this.state.errorInfo.componentStack
                            : 'No component stack available'}
                    </details>
                </div>
            );
        }

        // If no error, render the children components as usual
        return this.props.children;
    }
}

export default ErrorBoundary;
