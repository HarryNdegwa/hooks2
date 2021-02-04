import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import appTheme from "../Colors";

function Main(props) {
  const theme = useContext(ThemeContext);
  const currentTheme = appTheme[theme];

  return (
    <main
      style={{
        padding: "1rem",
        backgroundColor: `${currentTheme.backgroundColor}`,
        color: `${currentTheme.textColor}`,
      }}
    >
      <h1>Heading 1</h1>
      <p>This is a paragraph</p>
      <button> This is a button</button>
    </main>
  );
}

export default Main;
