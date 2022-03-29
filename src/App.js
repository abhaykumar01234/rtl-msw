import React, { useState } from "react";
import TestAxios from "./components/TestAxios";
import TestHook from "./components/TestHook";

function App() {
  const [name, setName] = useState("Joe");

  const changeName = () => setName("Steve");

  return (
    <>
      <TestHook name={name} changeName={changeName} />
      <TestAxios url="https://jsonplaceholder.typicode.com/posts/1" />
    </>
  );
}

export default App;
