import React, { useEffect, useState } from "react";

function Main(props) {
  const [count, setCount] = useState(0); // takes initial state used in first render

  useEffect(() => {
    console.log("Mounted");
    // used to make  side effects
    // Data fetching, setting up a subscription, and manually changing the DOM in React components are all examples of side effects
    document.title = count;

    return () => {
      console.log("Unmounted");
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

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
