import { render, screen } from "@testing-library/react";
import Header from "../Header";

test("should render same text passed into title prop", () => {
  render(<Header title="My Header" />);
  const headingElement = screen.getByText(/my header/i); /// text componentte gozukecek

  expect(headingElement).toBeInTheDocument();
});

it("should render same text passed into title prop", () => {
  render(<Header />);
  const headingElement = screen.getByRole("heading"); /// heading demek h1 demek ya da h2-3-4-5-6 eger bu varsa demek ki testi gecti

  expect(headingElement).toBeInTheDocument();
});
