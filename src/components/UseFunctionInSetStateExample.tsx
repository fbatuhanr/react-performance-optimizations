import React, { useState } from 'react';

const UseFunctionInSetStateExample: React.FC = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <h2>Using Function in setState Example</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default UseFunctionInSetStateExample;