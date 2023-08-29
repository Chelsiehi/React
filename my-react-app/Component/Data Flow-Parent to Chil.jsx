// ParentComponent.js
import React from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  const message = 'Hello from parent';
  return <ChildComponent message={message} />;
}

// ChildComponent.js
import React from 'react';

function ChildComponent(props) {
  return <p>{props.message}</p>;
}

