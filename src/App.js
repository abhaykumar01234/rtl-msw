import React from "react";
import FlashMessage from "./components/FlashMessage";
// import TestAxios from "./components/TestAxios";
import TestHookParent from "./components/TestHookParent";
import TestReducer from "./components/TestReducer";

function App() {
  return (
    <>
      <TestHookParent />
      {/* <TestAxios url="https://jsonplaceholder.typicode.com/posts/1" /> */}
      <TestReducer url="https://jsonplaceholder.typicode.com/posts/1" />
      <FlashMessage />
    </>
  );
}

export default App;
