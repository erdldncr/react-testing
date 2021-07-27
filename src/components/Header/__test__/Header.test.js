import { render, screen } from "@testing-library/react";
import Header from "../Header";

test("should render same text passed into title prop", () => {
  render(<Header title="My Header" />);
  const headingElement = screen.getByText(/my header/i); /// text componentte gozukecek

  expect(headingElement).toBeInTheDocument();
});

// it("should render same text passed into title prop", () => {
//   render(<Header />);
//   const headingElement = screen.getByRole("heading"); /// heading demek h1 demek ya da h2-3-4-5-6 eger bu varsa demek ki testi gecti, Bu test fail olur eger 1 dden fazla h heading varsa

//   expect(headingElement).toBeInTheDocument();
// });

it("should render same text passed into title prop", () => {
  render(<Header title="My Header" />);
  const headingElement = screen.getByRole("heading", { name: "My Header" }); /// heading demek h1 demek ya da h2-3-4-5-6 eger bu varsa demek ki testi gecti, heading var ama headinglerden sadece 1 tanesinin icinde My header yazmali, daha specific bir test

  expect(headingElement).toBeInTheDocument();
});

it("should render same text passed into title prop", () => {
  render(<Header title="My Header" />);
  const headingElement = screen.getByTitle("Header"); //title attribute ekleyip o sekilde test etme

  expect(headingElement).toBeInTheDocument();
});
it("should render same text passed into title prop", () => {
  render(<Header title="My Header" />);
  const headingElement = screen.getByTestId("header-2"); ///data-testId ile test etme

  expect(headingElement).toBeInTheDocument();
});

///Find By
it("should render same text passed into title prop", async () => {
  render(<Header title="My Header" />);
  const headingElement = await screen.findByText(/my header/i); //bu async await olmak zorunda

  expect(headingElement).toBeInTheDocument();
});
//Qyery By

it("should render same text passed into title prop", () => {
  render(<Header title="My Header" />);
  const headingElement = screen.queryByText(/dogs/i); //bu ters mantik ddog beklemyrum bu testte diyruz yoksa testi geceeck.

  expect(headingElement).not.toBeInTheDocument();
});

///getAll

it("should render same text passed into title prop", () => {
  render(<Header title="My Header" />);
  const headingElements = screen.getAllByRole("heading"); //all dedgim icin array gelecek gelen array de 2 eleman beklyrum Headder.js'e bakarsan 2 h tag li elemani gorebilirsin

  expect(headingElements.length).toBe(2);
});