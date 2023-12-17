import ErrorMessage from "./ErrorMessage";

interface PlanetNamePros {
  planetName: string;
  onChangePlanetName: (value: string) => void;
  validate: (value: string) => string[];
}

const PlanetName: React.FC<PlanetNamePros> = ({
  planetName,
  onChangePlanetName,
  validate,
}) => {
  const errorMessage = validate(planetName);
  return (
    <>
      <label htmlFor="PlanetName">Planet Name</label>
      <input
        id="PlanetName"
        type="text"
        value={planetName}
        onChange={(e) => onChangePlanetName(e.target.value)}
      ></input>
      <ErrorMessage message={errorMessage} />
    </>
  );
};

export default PlanetName;
