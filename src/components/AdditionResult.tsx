import ErrorMessage from "./ErrorMessage";

interface AdditionResultProps {
  additionResult: string;
  validate: (value: string) => string[];
  onChangeAdditionResult: (value: string) => void;
}

const AdditionResult: React.FC<AdditionResultProps> = ({
  additionResult,
  onChangeAdditionResult,
  validate,
}) => {
  const errorMessage = validate(additionResult);
  return (
    <>
      <label htmlFor="additionResult">What is 2+2?</label>
      <select
        id="additionResult"
        value={additionResult}
        onChange={(e) => onChangeAdditionResult(e.target.value)}
      >
        <option value="4">4</option>
        <option value="not 4">not 4</option>
      </select>
      <ErrorMessage message={errorMessage} />
    </>
  );
};

export default AdditionResult;
