import { screen, render } from "@testing-library/react";
import PlanetName from "./PlanetName";
import userEvent from "@testing-library/user-event";

test("PlanetName component renders", () => {
  const PlanetNameProp = {
    planetName: "",
    onChangePlanetName: () => {},
    validate: () => [],
  };
  render(<PlanetName {...PlanetNameProp} />);
  const labelText = screen.getByText("Planet Name");
  expect(labelText).toBeInTheDocument();
});

test("input is given correct value", () => {
  const PlanetNameProps = {
    planetName: "Godzilla",
    onChangePlanetName: () => {},
    validate: () => [],
  };

  render(<PlanetName {...PlanetNameProps} />);
  const labelText = screen.getByLabelText("Planet Name");
  expect(labelText).toHaveValue("Godzilla");
});

test("when value changes, onChange function is called", async () => {
  const handleChange = jest.fn();

  const planetNameProps = {
    planetName: "",
    onChangePlanetName: handleChange,
    validate: () => [],
  };

  render(<PlanetName {...planetNameProps} />);
  const input = screen.getByLabelText("Planet Name");
  await userEvent.type(input, "Jaeger");
  expect(handleChange).toHaveBeenCalled();
  expect(handleChange).toHaveBeenCalledTimes(6);
});

test("when there is no error, error array should be empty", () => {
  const mockReasonForSparing = jest.fn();

  mockReasonForSparing.mockReturnValue([]);

  const planetNameProps = {
    planetName: "",
    onChangePlanetName: () => {},
    validate: mockReasonForSparing,
  };

  render(<PlanetName {...planetNameProps} />);
  const error = screen.queryByText("Characters must be between 2 and 49");
  expect(error).not.toBeInTheDocument();
});

test("when there is error, error should be displayed", () => {
  const mockReasonForSparing = jest.fn();

  mockReasonForSparing.mockReturnValue(["Characters must be between 2 and 49"]);

  const planetNameProps = {
    planetName: "",
    onChangePlanetName: () => {},
    validate: mockReasonForSparing,
  };

  render(<PlanetName {...planetNameProps} />);
  const error = screen.queryByText("Characters must be between 2 and 49");
  expect(error).toBeInTheDocument();
});
