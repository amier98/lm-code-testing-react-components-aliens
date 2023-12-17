import { screen, render } from "@testing-library/react";
import ReasonForSparing from "./ReasonForSparing";
import userEvent from "@testing-library/user-event";

test("if ReasonForSparing component renders", () => {
  const ReasonForSparingProps = {
    reasonToSpare: "",
    onChangeReasonToSpare: () => {},
    validate: () => [],
  };
  render(<ReasonForSparing {...ReasonForSparingProps} />);
  const labelText = screen.getByText("Reason for Sparing");
  expect(labelText).toBeInTheDocument();
});

test("when input is given, the value is correct", () => {
  const reaasonForSparingProps = {
    reasonToSpare:
      "becuase there is a lot of good on this planet, we will give you a chance",
    onChangeReasonToSpare: () => {},
    validate: () => [],
  };

  render(<ReasonForSparing {...reaasonForSparingProps} />);
  const labelText = screen.getByLabelText("Reason for Sparing");
  expect(labelText).toHaveValue(
    "becuase there is a lot of good on this planet, we will give you a chance"
  );
});

test("when value is changed, onChange function is called", async () => {
  const handleChange = jest.fn();

  const reasonForSparingProps = {
    reasonToSpare: "",
    onChangeReasonToSpare: handleChange,
    validate: () => [],
  };

  render(<ReasonForSparing {...reasonForSparingProps} />);

  const input = screen.getByLabelText("Reason for Sparing");

  await userEvent.type(input, "because there is a lot of good");

  expect(handleChange).toBeCalled();
  expect(handleChange).toBeCalledTimes(30);
});
