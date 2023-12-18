import { validateReasonForSparing } from "./validate_ReasonForSparing";
test("when there is enough characters, no error should occur", () => {
  expect(
    validateReasonForSparing(
      "Titans have invaded the earth, godzilla can only stop them."
    )
  ).toEqual([]);
});
test("when the input is less or exceeds the character limit, error should occur", () => {
  expect(validateReasonForSparing("Gojira")).toEqual([
    "Characters must be between 17 and 153",
  ]);
});
