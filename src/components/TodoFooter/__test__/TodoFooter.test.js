import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import TodoFooter from "../../TodoFooter/TodoFooter";

const MockTodoFooter = ({ numberOfIncompleteTasks }) => {
  return (
    <BrowserRouter>
      <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
    </BrowserRouter>
  );
};

test("should render the correct amount of incomplete tasks", () => {
  render(<MockTodoFooter numberOfIncompleteTasks={5} />);
  const paragraphElement = screen.getByText(/5 tasks left/i); /// text componentte gozukecek

  expect(paragraphElement).toBeInTheDocument();
});

test("should render the 'task' when the number is one", () => {
  render(<MockTodoFooter numberOfIncompleteTasks={1} />);
  const paragraphElement = screen.getByText(/1 task left/i); /// text componentte gozukecek

  expect(paragraphElement).toBeInTheDocument();
});

test("should render the 'task' when the number is one", () => {
  render(<MockTodoFooter numberOfIncompleteTasks={1} />);
  const paragraphElement = screen.getByText(/1 task left/i); /// text componentte gozukecek

  expect(paragraphElement).toBeVisible();
});

test("should render the 'task' when the number is one", () => {
  render(<MockTodoFooter numberOfIncompleteTasks={1} />);
  const paragraphElement = screen.getByText(/1 task left/i); /// text componentte gozukecek

  expect(paragraphElement).toContainHTML("p");
});

test("should render the 'task' when the number is one", () => {
  render(<MockTodoFooter numberOfIncompleteTasks={1} />);
  const paragraphElement = screen.getByText(/1 task left/i); /// text componentte gozukecek

  expect(paragraphElement.innerHTML).toBe("1 task left");
});
