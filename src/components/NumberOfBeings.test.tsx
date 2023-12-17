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
