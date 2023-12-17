export const validatePlanetName: (planetName: string) => string[] = (
  planetName
) => {
  //Must be between 2 and 49 characters. Numbers are allowed, but no special characters.
  const error: string[] = [];

  if (
    (planetName.length > 0 && planetName.length < 3) ||
    planetName.length > 49
  ) {
    error.push("Characters must be between 2 and 49");
  }

  return error;
};
