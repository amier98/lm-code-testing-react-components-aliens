interface PlanetNamePros {
  planetName: string;
  onChangePlanetName: (value: string) => void;
}

const PlanetName: React.FC<PlanetNamePros> = ({
  planetName,
  onChangePlanetName,
}) => {
  return (
    <>
      <label htmlFor="PlanetName">Planet Name</label>
      <input
        type="text"
        value={planetName}
        onChange={(e) => onChangePlanetName(e.target.value)}
      ></input>
    </>
  );
};

export default PlanetName;
