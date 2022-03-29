import React, { useState } from "react";
import TestHook from "./TestHook";

const TestHookParent = () => {
  const [name, setName] = useState("Joe");

  const changeName = () => setName("Steve");
  return <TestHook name={name} changeName={changeName} />;
};

export default TestHookParent;
