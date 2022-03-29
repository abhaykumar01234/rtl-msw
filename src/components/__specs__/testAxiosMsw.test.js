import React from "react";
import TestAxios from "../TestAxios";
import {
  screen,
  render,
  waitForElementToBeRemoved,
} from "@testing-library/react";

import { server } from "../../msw/server";
const url = "https://jsonplaceholder.typicode.com/posts/1";

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

describe("after application fully loads", () => {
  beforeEach(async () => {
    render(<TestAxios url={url} />);
    await waitForElementToBeRemoved(() => screen.getByText("...Loading"));
  });
  it("Async axios request works", async () => {
    expect(await screen.findByTestId("title")).toBeInTheDocument();
  });
});
