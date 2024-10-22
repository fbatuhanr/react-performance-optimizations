import React, { useState } from "react";

const ImmutableDataExample: React.FC = () => {
  const [items, setItems] = useState<number[]>([1, 2, 3]);

  const addItem = () => {
    // Using spread operator to keep immutability
    setItems((prevItems) => [...prevItems, prevItems.length + 1]);
  };

  return (
    <div>
      <h2>Immutable Data Structures Example</h2>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <button onClick={addItem}>Add Item</button>
    </div>
  );
};

export default ImmutableDataExample;
