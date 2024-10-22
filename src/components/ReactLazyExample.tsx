import React, { Suspense } from "react";

// Lazy load the component
const LazyComponent = React.lazy(() => delayForDemo(import("./LazyLoadedComponent")));

const ReactLazyExample: React.FC = () => {
  return (
    <div>
      <h2>React.lazy and Suspense Example</h2>
      <Suspense fallback={<div>Loading Component...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
};

const delayForDemo = (promise: Promise<any>): Promise<any> => {
  return new Promise(resolve => {
    setTimeout(resolve, 2500);
  }).then(() => promise);
}

export default ReactLazyExample;
