import { validateNumberOfBeings } from "./validate_NumberOfBeings";

test("when there is enough characters, no error should occur", () => {
  expect(validateNumberOfBeings(5)).toEqual([]);
});
test("when the input is less or exceeds the character limit, error should occur", () => {
  expect(validateNumberOfBeings(2000000000)).toEqual([
    "It must not be greater than a billion",
  ]);
});
