import React, { useContext, useEffect, useRef, useState } from "react";

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
};

const ThemeContext = React.createContext(themes.light);

function Main(props) {
  const [count, setCount] = useState(0); // takes initial state used in first render

  const inputRef = useRef(null);

  useEffect(() => {
    console.log("Mounted");
    // used to make  side effects
    // Data fetching, setting up a subscription, and manually changing the DOM in React components are all examples of side effects
    document.title = count;

    return () => {
      console.log("Unmounted");
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleAdd = (e) => {
    e.preventDefault();
    setCount(count + 1);
  };

  const handleSubtract = (e) => {
    e.preventDefault();
    setCount(count - 1);
  };

  const handleClick = (e) => {
    e.preventDefault();
    inputRef.current.focus();
  };

  return (
    <ThemeContext.Provider value={themes.dark}>
      <p>{count}</p>
      <ThemedButton type="add" action={handleAdd} />
      <ThemedButton type="subtract" action={handleSubtract} />
      <input type="text" ref={inputRef} placeholder="Type here..." />
      <button onClick={handleClick}>Focus</button>
    </ThemeContext.Provider>
  );
}

function ThemedButton(props) {
  const theme = useContext(ThemeContext);
  const handleClick = (e) => {
    if (props.type === "add") {
      props.action();
    } else {
      props.action();
    }
  };
  return (
    <button
      style={{ background: theme.background, color: theme.foreground }}
      onClick={() => handleClick}
    >
      {props.type === "add" ? "+" : "-"}
    </button>
  );
}

export default Main;
