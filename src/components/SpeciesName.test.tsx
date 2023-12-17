import { screen, render } from "@testing-library/react";
import SpeciesName from "./SpeciesName";
import userEvent from "@testing-library/user-event";

test("if SpeciesName component renders", () => {
  const SpeciesNameProps = {
    speciesName: "",
    validate: () => [],
    onChangeSpeciesName: () => {},
  };
  render(<SpeciesName {...SpeciesNameProps} />);
  const labelText = screen.getByText("Species Name");
  expect(labelText).toBeInTheDocument();
});

test("when input is given, it is the correct value", () => {
  const speciesNameProps = {
    speciesName: "Goblins",
    validate: () => [],
    onChangeSpeciesName: () => {},
  };

  render(<SpeciesName {...speciesNameProps} />);
  const labelText = screen.getByLabelText("Species Name");
  expect(labelText).toHaveValue("Goblins");
});

test("when value is changed, onChange function is called", async () => {
  const handleChange = jest.fn();

  const speciesNameProps = {
    speciesName: "",
    validate: () => [],
    onChangeSpeciesName: handleChange,
  };

  render(<SpeciesName {...speciesNameProps} />);
  const input = screen.getByLabelText("Species Name");

  await userEvent.type(input, "Androids");

  expect(handleChange).toBeCalled();
  expect(handleChange).toBeCalledTimes(8);
});
