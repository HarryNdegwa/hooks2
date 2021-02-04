import "./App.css";
import Main from "./Main";
import ThemeContext from "./context/ThemeContext";

function App() {
  return (
    <ThemeContext.Provider value={"light"}>
      {/* every component inside now can access the value */}
      <div className="App">
        <Main />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
