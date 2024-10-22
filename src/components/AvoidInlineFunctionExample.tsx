import React, { useState, useCallback } from "react";

const AvoidInlineFunctionExample: React.FC = () => {
  const [count, setCount] = useState(0);

  // Avoiding inline function by using useCallback
  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div>
      <h2>Avoiding Inline Functions Example</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default AvoidInlineFunctionExample;
