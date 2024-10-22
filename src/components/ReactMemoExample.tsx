import React, { useState } from "react";

// Define the type for the list item
interface Item {
  id: number;
  name: string;
}

// Child component that is memoized using React.memo
const ListItem: React.FC<{ item: Item }> = React.memo(({ item }) => {
  console.log(`Rendering: ${item.name}`);
  return <li>{item.name}</li>;
});

// Parent component rendering the list
const ReactMemoExample: React.FC = () => {
  const [items, setItems] = useState<Item[]>([
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
  ]);

  // Function to add a new item to the list
  const addItem = () => {
    setItems((prevItems) => [
      ...prevItems,
      { id: prevItems.length + 1, name: `Item ${prevItems.length + 1}` },
    ]);
  };

  return (
    <div>
      <h2>React.memo Example</h2>
      <ul>
        {items.map((item) => (
          <ListItem key={item.id} item={item} />
        ))}
      </ul>
      <button onClick={addItem}>Add Item</button>
    </div>
  );
};

export default ReactMemoExample;
