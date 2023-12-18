import { validateSpeciesName } from "./validate_species_name";
test("when there is enough characters, no error should occur", () => {
  expect(validateSpeciesName("Titans")).toEqual([]);
});
test("when the input is less or exceeds the character limit, error should occur", () => {
  expect(validateSpeciesName("as")).toEqual(["Input must be between 3 and 23"]);
});
