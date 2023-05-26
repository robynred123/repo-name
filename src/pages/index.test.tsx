import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Home from "./index";

describe("the index page", () => {
  it("should render the page as expected", () => {
    render(<Home />);

    const heading = screen.getByRole("heading");
    expect(heading).toHaveTextContent("About Me");
  });
});
