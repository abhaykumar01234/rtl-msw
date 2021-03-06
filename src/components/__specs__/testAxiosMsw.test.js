import React from "react";
import TestAxios from "../TestAxios";
import {
  screen,
  render,
  waitForElementToBeRemoved,
} from "../../msw/test-utils";

const url = "https://jsonplaceholder.typicode.com/posts/1";

describe("after application fully loads", () => {
  beforeEach(async () => {
    render(<TestAxios url={url} />);
    await waitForElementToBeRemoved(() => screen.getByText("...Loading"));
  });
  it("Async axios request works", async () => {
    expect(await screen.findByTestId("title")).toBeInTheDocument();
  });
});
