import React, { createContext, useContext, useEffect, useReducer } from "react";
import { initialState, TYPES, reducer } from "../utils";
import axios from "axios";

const FlashContext = createContext();
export const useFlashMessage = () => useContext(FlashContext);

export const FlashProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    const fetchFlashMessages = async () => {
      try {
        dispatch({ type: TYPES.API_REQUEST });
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/posts/1"
        );
        dispatch({ type: TYPES.API_SUCCESS, payload: res.data });
      } catch (err) {
        dispatch({ type: TYPES.API_FAILURE, payload: err.message });
      }
    };

    fetchFlashMessages();
  }, []);

  return (
    <FlashContext.Provider
      value={{
        ...state,
      }}
    >
      {children}
    </FlashContext.Provider>
  );
};
