import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Layout from "./layout";
import { BrowserRouter } from "react-router-dom";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe("<Layout />", () => {
  it("should render the header as expected", () => {
    render(
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    );

    const heading = screen.getByRole("heading");
    expect(heading).toHaveTextContent("<RB />");
  });

  it("should navigate to the portfolio page on clicking the portfolio icon", () => {
    render(
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    );

    const button = screen.getAllByRole("button")[0];

    expect(button).toBeInTheDocument();
    fireEvent(button, new MouseEvent("click"));
    waitFor(() =>
      expect(mockedUsedNavigate).toHaveBeenCalledWith("/portfolio")
    );
  });

  it("should navigate to linkedin on clicking the linkedin icon", () => {
    global.open = jest.fn();

    render(
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    );

    const button = screen.getAllByRole("button")[1];

    expect(button).toBeInTheDocument();
    fireEvent(button, new MouseEvent("click"));
    waitFor(() =>
      expect(global.open).toHaveBeenCalledWith(
        "https://www.linkedin.com/in/rob-pines"
      )
    );
  });

  it("should navigate to github on clicking the github icon", () => {
    global.open = jest.fn();

    render(
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    );

    const button = screen.getAllByRole("button")[1];

    expect(button).toBeInTheDocument();
    fireEvent(button, new MouseEvent("click"));
    waitFor(() =>
      expect(global.open).toHaveBeenCalledWith("https://github.com/robynred123")
    );
  });
});
