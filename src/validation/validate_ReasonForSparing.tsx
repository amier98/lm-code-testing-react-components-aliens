export const validateReasonForSparing: (
  reasonForSparing: string
) => string[] = (reasonForSparing) => {
  const error: string[] = [];

  if (
    (reasonForSparing.length > 0 && reasonForSparing.length < 17) ||
    reasonForSparing.length > 153
  ) {
    error.push("Characters must be between 17 and 153");
  }
  return error;
};
