import ErrorMessage from "./ErrorMessage";

interface NumberOfBeingProps {
  beingsNumber: number;
  onChangeNumberOfBeings: (value: number) => void;
  validate: (value: number) => string[];
}

const NumberOfBeings: React.FC<NumberOfBeingProps> = ({
  beingsNumber,
  onChangeNumberOfBeings,
  validate,
}) => {
  const errorMessage = validate(beingsNumber);
  return (
    <>
      <label htmlFor="NumberOfBeings">Number of Beings</label>
      <input
        type="number"
        value={beingsNumber}
        onChange={(e) => onChangeNumberOfBeings(parseInt(e.target.value))}
      ></input>
      <ErrorMessage message={errorMessage} />
    </>
  );
};

export default NumberOfBeings;
