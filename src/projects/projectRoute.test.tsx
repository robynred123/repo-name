import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";
import ProjectRoute from "./projectRoute";

let id: number;
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    projectId: id,
  }),
}));

jest.mock("./index.tsx", () => [
  {
    title: "A Test Project",
    description: "This is a mock",
    element: <h1>hi</h1>,
  },
  {
    title: "A Test Project 2",
    description: "This is a mock",
    element: <h1>woo</h1>,
  },
]);

describe("<ProjectRoute />", () => {
  it("should render the first project as expected", () => {
    id = 0;
    render(
      <BrowserRouter>
        <ProjectRoute />
      </BrowserRouter>
    );

    const heading = screen.getByRole("heading");
    expect(heading).toHaveTextContent("hi");
  });

  it("should render the second project as expected", () => {
    id = 1;
    render(
      <BrowserRouter>
        <ProjectRoute />
      </BrowserRouter>
    );

    const heading = screen.getByRole("heading");
    expect(heading).toHaveTextContent("woo");
  });
});
