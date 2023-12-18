import { screen, render } from "@testing-library/react";
import NumberOfBeings from "./NumberOfBeings";

test("if numberOfBeings is being rendered", () => {
  const NumberOfBeingsProps = {
    beingsNumber: 0,
    onChangeNumberOfBeings: () => {},
    validate: () => [],
  };
  render(<NumberOfBeings {...NumberOfBeingsProps} />);
  const labelText = screen.getByText("Number of Beings");
  expect(labelText).toBeInTheDocument();
});

test("when there is no error, error array should be empty", () => {
  const mockReasonForSparing = jest.fn();

  mockReasonForSparing.mockReturnValue([]);

  const NumberOfBeingsProps = {
    beingsNumber: 0,
    onChangeNumberOfBeings: () => {},
    validate: mockReasonForSparing,
  };

  render(<NumberOfBeings {...NumberOfBeingsProps} />);
  const error = screen.queryByText("It must not be greater than a billion");
  expect(error).not.toBeInTheDocument();
});

test("when there is error, error should be displayed", () => {
  const mockReasonForSparing = jest.fn();

  mockReasonForSparing.mockReturnValue([
    "It must not be greater than a billion",
  ]);

  const NumberOfBeingsProps = {
    beingsNumber: 0,
    onChangeNumberOfBeings: () => {},
    validate: mockReasonForSparing,
  };

  render(<NumberOfBeings {...NumberOfBeingsProps} />);
  const error = screen.queryByText("It must not be greater than a billion");
  expect(error).toBeInTheDocument();
});
