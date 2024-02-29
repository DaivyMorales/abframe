import Home from "@/pages";
import { render, screen } from "@testing-library/react";

it("Should to be the main titles", () => {
  render(<Home />);

  const title = screen.getByText("Focus on Your Photos, not the Formatting");

  const description = screen.getByText(
    "Create visually stunning templates and frames for your image comparisons",
  );

  expect(title).toBeInTheDocument();
  expect(description).toBeInTheDocument();
});
