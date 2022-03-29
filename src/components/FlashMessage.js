import React from "react";
import { useFlashMessage } from "../contexts/flashMessage";

const FlashMessage = () => {
  const state = useFlashMessage();

  return (
    <div>
      <h1> Axios Context Provider Reducer Test </h1>
      {state.loading ? (
        <p>...Loading</p>
      ) : !!state.data ? (
        <p data-testid="title">{state.data.title}</p>
      ) : (
        <p data-testid="error">{state.error}</p>
      )}
    </div>
  );
};

export default FlashMessage;
