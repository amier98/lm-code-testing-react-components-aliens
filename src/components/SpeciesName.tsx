interface speciesNameProps {
  speciesName: string;
  onChangeSpeciesName: (value: string) => void;
}

const SpeciesName: React.FC<speciesNameProps> = ({
  speciesName,
  onChangeSpeciesName,
}) => {
  return (
    <>
      <label htmlFor="speciesName">Species Name</label>
      <input
        className="speciesInput"
        type="text"
        value={speciesName}
        onChange={(e) => onChangeSpeciesName(e.target.value)}
      ></input>
    </>
  );
};

export default SpeciesName;
