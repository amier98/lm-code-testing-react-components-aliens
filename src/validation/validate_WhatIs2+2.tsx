export const validateAdditionNumber: (addition: string) => string[] = (
  additionNumber
) => {
  const error: string[] = [];

  if (additionNumber === "not 4") {
    error.push("Incorrect, 4 is the correct answer");
  }

  return error;
};
