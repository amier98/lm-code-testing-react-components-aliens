import { render, screen } from "@testing-library/react";
import AdditionResult from "./AdditionResult";
import userEvent from "@testing-library/user-event";

test("renders additionResult input", () => {
  const AdditionResultProp = {
    additionResult: "",
    onChangeAdditionResult: () => {},
    validate: () => [],
  };
  render(<AdditionResult {...AdditionResultProp} />);
  const labelText = screen.getByText("What is 2+2?");
  expect(labelText).toBeInTheDocument();
});

test("when prop is given a value, it should have the correct input", () => {
  const AdditionResultProp = {
    additionResult: "4",
    onChangeAdditionResult: () => {},
    validate: () => [],
  };
  render(<AdditionResult {...AdditionResultProp} />);
  const labelText = screen.getByLabelText("What is 2+2?");
  expect(labelText).toHaveValue("4");
});

// test("When value is changed, onChange function should be called ", async () => {
//   const handleChange = jest.fn();
//   const AdditionResultProps = {
//     additionResult: "4",
//     onChangeAdditionResult: handleChange,
//     validate: () => [],
//   };
//   render(<AdditionResult {...AdditionResultProps} />);
//   const input = screen.getByLabelText("What is 2+2?");
//   await userEvent.selectOptions(combobox, "4")
//   expect(handleChange).toHaveBeenCalled();
//   expect(handleChange).toHaveBeenCalledTimes(6);
// });
