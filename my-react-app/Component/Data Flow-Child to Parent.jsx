// ParentComponent.js
import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return <ChildComponent count={count} onIncrement={incrementCount} />;
}

// ChildComponent.js
import React from 'react';

function ChildComponent(props) {
  return (
    <div>
      <p>Count: {props.count}</p>
      <button onClick={props.onIncrement}>Increment</button>
    </div>
  );
}
