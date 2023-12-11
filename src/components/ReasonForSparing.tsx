interface ReasonForSparingProps {
  reasonToSpare: string;
  onChangeReasonToSpare: (value: string) => void;
}

const ReasonForSparing: React.FC<ReasonForSparingProps> = ({
  reasonToSpare,
  onChangeReasonToSpare,
}) => {
  return (
    <>
      <label htmlFor="ReasonForSparing">Reason for Sparing</label>
      <input
        className="reasonForSparing"
        type="text"
        value={reasonToSpare}
        onChange={(e) => onChangeReasonToSpare(e.target.value)}
      />
    </>
  );
};

export default ReasonForSparing;
