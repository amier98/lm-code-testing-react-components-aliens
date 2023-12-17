export const validateSpeciesName: (speciesName: string) => string[] = (
  speciesName
) => {
  // Must be between 3 and 23 characters. No numbers or special characters allowed!
  const error: string[] = [];

  if (
    (speciesName.length > 0 && speciesName.length < 3) ||
    speciesName.length > 23
  ) {
    error.push("Input must be between 3 and 23");
  }

  return error;
};
