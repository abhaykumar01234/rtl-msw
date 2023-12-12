import React from "react";
import TestAxios from "../TestAxios";
import { render, cleanup, waitForElement } from "@testing-library/react";
import axiosMock from "axios";
jest.mock("axios");
afterEach(cleanup);

it("Async axios request works", async () => {
  axiosMock.get.mockResolvedValue({
    data: {
      id: 2,
      userId: 5,
      title: "some title",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, molestias?",
    },
  });

  const url = "https://jsonplaceholder.typicode.com/posts/1";
  const { getByText, getByTestId } = render(<TestAxios url={url} />);

  expect(getByText(/...Loading/i).textContent).toBe("...Loading");

  const resolvedEl = await waitForElement(() => getByTestId("title"));

  expect(resolvedEl.textContent).toBe("TITLE : some title");

  expect(axiosMock.get).toHaveBeenCalledTimes(1);
  expect(axiosMock.get).toHaveBeenCalledWith(url);
});
