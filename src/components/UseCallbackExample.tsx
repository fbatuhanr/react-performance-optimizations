import React, { useState, useCallback } from "react";

const UseCallbackExample: React.FC = () => {
  const [count, setCount] = useState(0);

  // Memoized function only recalculates when 'count' changes
  const handleClick = useCallback(() => {
    console.log("Button clicked with count:", count);
  }, [count]);

  return (
    <div>
      <h2>useCallback Example</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={handleClick}>Log Count</button>
    </div>
  );
};

export default UseCallbackExample;
