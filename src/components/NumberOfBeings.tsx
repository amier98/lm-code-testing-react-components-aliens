interface NumberOfBeingProps {
  beingsNumber: string;
  onChangeNumberOfBeings: (value: string) => void;
}

const NumberOfBeings: React.FC<NumberOfBeingProps> = ({
  beingsNumber,
  onChangeNumberOfBeings,
}) => {
  return (
    <>
      <label htmlFor="NumberOfBeings">Number of Beings</label>
      <input
        type="text"
        value={beingsNumber}
        onChange={(e) => onChangeNumberOfBeings(e.target.value)}
      ></input>
    </>
  );
};

export default NumberOfBeings;
