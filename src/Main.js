import React, { useState } from "react";

function Main(props) {
  const [count, setCount] = useState(0); // takes initial state used in first render
  return (
    <div>
      <p>{count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -
      </button>
    </div>
  );
}

export default Main;
