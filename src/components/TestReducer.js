import React, { useReducer, useEffect } from "react";
import axios from "axios";
import { initialState, TYPES, reducer } from "../utils";

const TestReducer = ({ url }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchUrlData = async () => {
      try {
        dispatch({ type: TYPES.API_REQUEST });
        const res = await axios.get(url);
        dispatch({ type: TYPES.API_SUCCESS, payload: res.data });
      } catch (err) {
        dispatch({ type: TYPES.API_FAILURE, payload: err.message });
      }
    };

    fetchUrlData();
  }, [url]);

  return (
    <div>
      <h1> Axios Test </h1>
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

export default TestReducer;
