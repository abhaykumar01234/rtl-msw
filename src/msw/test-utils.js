import React from "react";
import { render } from "@testing-library/react";
import { FlashProvider } from "../contexts/flashMessage";

const AllTheProviders = ({ children }) => (
  <FlashProvider>{children}</FlashProvider>
);

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";

export { customRender as render };
