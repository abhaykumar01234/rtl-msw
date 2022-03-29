import React from "react";
import TestReducer from "../TestReducer";
import {
  screen,
  render,
  waitForElementToBeRemoved,
} from "../../msw/test-utils";

const url = "https://jsonplaceholder.typicode.com/posts/1";

describe("after application fully loads", () => {
  beforeEach(async () => {
    render(<TestReducer url={url} />);
    await waitForElementToBeRemoved(() => screen.getByText("...Loading"));
  });
  it("Async axios request works", async () => {
    expect(await screen.findByTestId("title")).toBeInTheDocument();
  });
});
