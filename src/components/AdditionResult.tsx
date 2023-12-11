interface AdditionResultProps {
  additionResult: string;
  onChangeAdditionResult: (value: string) => void;
}

const AdditionResult: React.FC<AdditionResultProps> = ({
  additionResult,
  onChangeAdditionResult,
}) => {
  return (
    <>
      <label htmlFor="AdditionResult">What is 2+2?</label>
      <input
        type="text"
        value={additionResult}
        onChange={(e) => onChangeAdditionResult(e.target.value)}
      ></input>
    </>
  );
};

export default AdditionResult;
