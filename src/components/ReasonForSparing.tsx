import ErrorMessage from "./ErrorMessage";

interface ReasonForSparingProps {
  reasonToSpare: string;
  onChangeReasonToSpare: (value: string) => void;
  validate: (value: string) => string[];
}

const ReasonForSparing: React.FC<ReasonForSparingProps> = ({
  reasonToSpare,
  onChangeReasonToSpare,
  validate,
}) => {
  const errorMessage = validate(reasonToSpare);
  return (
    <>
      <label htmlFor="reasonForSparing">Reason for Sparing</label>
      <input
        id="reasonForSparing"
        type="text"
        value={reasonToSpare}
        onChange={(e) => onChangeReasonToSpare(e.target.value)}
      />
      <ErrorMessage message={errorMessage} />
    </>
  );
};

export default ReasonForSparing;
