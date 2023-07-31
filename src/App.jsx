import React, { useState } from "react";
import Header from "./components/Header";
import CardContainer from "./components/CardContainer";
import Footer from "./components/Footer";
import "./App2.css";

const App = () => {
  const [score, setScore] = useState(0);

  return (
    <div>
      <Header score={score} />
      <CardContainer setScore={setScore} />
      <Footer />
    </div>
  );
};

export default App;
