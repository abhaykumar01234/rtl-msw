import React from "react";
import TestHook from "../TestHook";
import { render, fireEvent, cleanup } from "@testing-library/react";
import App from "../../App";

afterEach(cleanup);

it("Text in state is changed when button clicked", () => {
  const { getByText } = render(<TestHook />);

  expect(getByText(/Initial/i).textContent).toBe("Initial State");

  fireEvent.click(getByText("State Change Button"));

  expect(getByText(/Initial/i).textContent).toBe("Initial State Changed");
});

it("button click changes props", () => {
  const { getByText } = render(
    <App>
      <TestHook />
    </App>
  );

  expect(getByText(/Joe/i).textContent).toBe("Joe");

  fireEvent.click(getByText("Change Name"));

  expect(getByText(/Steve/i).textContent).toBe("Steve");
});
