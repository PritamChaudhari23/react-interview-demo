import React, { useState, lazy, Suspense } from "react";

const LazyLoading = () => {
  const [showLazyComponent, setShowLazyComponent] = useState(false);
  const LazyLoadedComponent = lazy(
    () =>
      new Promise((resolve) =>
        setTimeout(() => resolve({ default: LazyComponent }), 1000)
      )
  );

  return (
    <div>
      <h1>Lazy Loading Demo</h1>
      <button onClick={() => setShowLazyComponent(true)}>Load Component</button>
      {showLazyComponent && (
        <Suspense fallback={<div>Loading...</div>}>
          <LazyLoadedComponent />
        </Suspense>
      )}
    </div>
  );
};

const LazyComponent = () => {
  return (
    <div>
      <h1>Lazy Loaded Component</h1>
      <p>This component is loaded lazily!</p>
    </div>
  );
};

export default LazyLoading;
