export const validateNumberOfBeings: (numberOfBeings: number) => string[] = (
  numberOfBeings
) => {
  const errorMessage: string[] = [];

  if (numberOfBeings > 1000000000) {
    errorMessage.push("It must not be greater than a billion");
  }

  return errorMessage;
};
