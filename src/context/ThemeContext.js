import React from "react";

const ThemeContext = React.createContext(["light", () => {}]); // takes the initial values of the context

export default ThemeContext;
