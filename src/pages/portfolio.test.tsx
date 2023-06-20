import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Portfolio from "./portfolio";

jest.mock("../projects/index.tsx", () => [
  {
    title: "A Test Project",
    description: "This is a mock",
    element: <h1>hi</h1>,
  },
]);

describe("<Portfolio />", () => {
  it("should render the page as expected", () => {
    render(<Portfolio />);

    const heading = screen.getByRole("heading");
    expect(heading).toHaveTextContent("A Test Project");
  });
});
