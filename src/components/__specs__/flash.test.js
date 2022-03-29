import React from "react";
import FlashMessage from "../FlashMessage";
import {
  screen,
  render,
  waitForElementToBeRemoved,
} from "../../msw/test-utils";

describe("after application fully loads", () => {
  beforeEach(async () => {
    render(<FlashMessage />);
    await waitForElementToBeRemoved(() => screen.getByText("...Loading"));
  });
  it("Async axios request works", async () => {
    expect(await screen.findByTestId("title")).toBeInTheDocument();
  });
});
