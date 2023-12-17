import ErrorMessage from "./ErrorMessage";

interface speciesNameProps {
  speciesName: string;
  validate: (value: string) => string[];
  onChangeSpeciesName: (value: string) => void;
}

const SpeciesName: React.FC<speciesNameProps> = ({
  speciesName,
  validate,
  onChangeSpeciesName,
}) => {
  const errorMessage = validate(speciesName);

  console.log(errorMessage);

  return (
    <>
      <label htmlFor="speciesName">Species Name</label>
      <input
        id="speciesName"
        type="text"
        value={speciesName}
        onChange={(e) => onChangeSpeciesName(e.target.value)}
      ></input>
      <ErrorMessage message={errorMessage} />
    </>
  );
};

export default SpeciesName;
