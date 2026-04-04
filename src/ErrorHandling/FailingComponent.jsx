import React from 'react';

const FailingComponent = () => {
    // Intentionally throw an error to simulate a render failure
    throw new Error('This is a deliberately thrown error!');
    return <div>This will never be rendered</div>;
};

export default FailingComponent;
