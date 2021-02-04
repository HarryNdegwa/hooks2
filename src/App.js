import "./App.css";
import Main from "./components/Header";
import Header from "./components/Header";
import ThemeContext from "./context/ThemeContext";
import { useState } from "react";

function App() {
  const themeHook = useState("light");
  return (
    <ThemeContext.Provider value={themeHook}>
      {/* every component inside now can access the value */}
      <div className="App">
        <Header />
        <Main />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
