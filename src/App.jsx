import React from "react";
import "./App.css";
import CardContainer from "./components/CardContainer";

const App = () => {
  return (
    <>
      <header>
        <h1>Header</h1>
      </header>
      <main>
        <CardContainer />
      </main>
      <footer>
        <h1>Footer</h1>
      </footer>
    </>
  );
};

export default App;
