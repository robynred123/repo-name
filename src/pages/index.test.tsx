import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Home from "./index";

describe("<Home />", () => {
  it("should render the page as expected", () => {
    render(<Home />);

    const heading = screen.getByRole("heading");
    expect(heading).toHaveTextContent("About Me");
  });

  // further research needed to test image loads.
  it("should render the image skeleton", async () => {
    render(<Home />);

    expect(screen.getByTestId("skeleton")).toBeInTheDocument();
  });

  it("should direct to another website on clicking the download button", () => {
    render(<Home />);
    const mockOpen = jest.fn();
    window.open = mockOpen;

    const button = screen.getByText("Download My CV");

    expect(button).toBeInTheDocument();
    fireEvent(button, new MouseEvent("click"));
    waitFor(() => expect(mockOpen).toBeCalled());
  });
});
