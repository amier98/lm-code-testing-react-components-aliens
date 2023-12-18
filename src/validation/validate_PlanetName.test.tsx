import { validatePlanetName } from "./validate_PlanetName";

test("when there is enough characters, no error should occur", () => {
  expect(validatePlanetName("Titans have invaded the earth")).toEqual([]);
});
test("when the input is less or exceeds the character limit, error should occur", () => {
  expect(validatePlanetName("Go")).toEqual([
    "Characters must be between 2 and 49",
  ]);
});
