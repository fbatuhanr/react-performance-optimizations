import React from 'react';

interface Item {
  id: number;
  name: string;
}

const items: Item[] = [
  { id: 1, name: 'Apple' },
  { id: 2, name: 'Banana' },
  { id: 3, name: 'Orange' },
];

const KeyCoordinationListRenderingExample: React.FC = () => {
  return (
    <div>
      <h2>Key Coordination for List Rendering Example</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default KeyCoordinationListRenderingExample;
