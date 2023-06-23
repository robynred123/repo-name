import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Portfolio from "./portfolio";
import { BrowserRouter } from "react-router-dom";
const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));

jest.mock("../projects/index.tsx", () => [
  {
    title: "A Test Project",
    description: "This is a mock",
    element: <h1>hi</h1>,
  },
]);

describe("<Portfolio />", () => {
  it("should render the page as expected", () => {
    render(
      <BrowserRouter>
        <Portfolio />
      </BrowserRouter>
    );

    const headings = screen.getAllByRole("heading");
    expect(headings[0]).toHaveTextContent("Portfolio");
    expect(headings[1]).toHaveTextContent("A Test Project");
  });

  it("should navigate to the correct project on click of card", () => {
    render(
      <BrowserRouter>
        <Portfolio />
      </BrowserRouter>
    );

    const card = screen.getByTestId("card");
    fireEvent(card, new MouseEvent("click"));
    waitFor(() => {
      expect(mockedUsedNavigate).toHaveBeenCalledTimes(1);
      expect(mockedUsedNavigate).toHaveBeenCalledWith("/portfolio/0");
    });
  });
});
