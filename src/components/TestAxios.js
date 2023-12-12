import React, { useState, useEffect } from "react";
import axios from "axios";

const TestAxios = ({ url }) => {
  const [state, setState] = useState();

  useEffect(() => {
    axios.get(url).then((res) => setState(res.data));
  }, [url]);

  return (
    <div>
      <h1> Axios Test </h1>
      {state ? (
        <>
          <h3>Post</h3>
          <p data-testid="post-id">Post ID : {state.id}</p>
          <p data-testid="title">TITLE : {state.title}</p>
          <p data-testid="user-id">USER ID : {state.userId}</p>
          <p data-testid="post-body">BODY : {state.body}</p>
        </>
      ) : (
        <p>...Loading</p>
      )}
    </div>
  );
};

export default TestAxios;
