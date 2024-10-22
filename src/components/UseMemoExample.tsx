import React, { useState, useMemo } from "react";

const UseMemoExample: React.FC = () => {
  const [count, setCount] = useState(0);
  const [items] = useState([1, 2, 3, 4, 5]);

  // Memoized value only recalculated when 'count' changes
  const expensiveCalculation = useMemo(() => {
    console.log("Expensive calculation running...");
    return items.reduce((total, item) => total + item * count, 0);
  }, [count, items]);

  return (
    <div>
      <h2>useMemo Example</h2>
      <p>Expensive calculation result: {expensiveCalculation}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
};

export default UseMemoExample;
