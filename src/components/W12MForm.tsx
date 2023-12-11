import { useState } from "react";
import W12MHeader from "./W12MHeader";
import SpeciesName from "../components/SpeciesName";
import PlanetName from "./PlanetName";
import NumberOfBeings from "./NumberOfBeings";
import AdditionResult from "./AdditionResult";
import ReasonForSparing from "./ReasonForSparing";
import DisplayFormInput from "./DisplayFormInput";

const W12MForm = () => {
  const [speciesNames, setSpeciesName] = useState("");
  const [planetName, setPlanetName] = useState("");
  const [numberofBeings, setNumberOfBeings] = useState("");
  const [numberResult, setNumberResult] = useState("");
  const [reasonForSparing, setReasonForSparing] = useState("");
  const [displayFormInput, setDisplayFormInput] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(
      speciesNames,
      planetName,
      numberofBeings,
      numberResult,
      reasonForSparing
    );
  };

  return (
    <section className="w12MForm">
      <W12MHeader />
      <form onSubmit={handleSubmit}>
        <SpeciesName
          speciesName={speciesNames}
          onChangeSpeciesName={(value) => setSpeciesName(value)}
        />
        <PlanetName
          planetName={planetName}
          onChangePlanetName={(value) => setPlanetName(value)}
        />
        <NumberOfBeings
          beingsNumber={numberofBeings}
          onChangeNumberOfBeings={(value) => setNumberOfBeings(value)}
        />
        <AdditionResult
          additionResult={numberResult}
          onChangeAdditionResult={(value) => setNumberResult(value)}
        />
        <ReasonForSparing
          reasonToSpare={reasonForSparing}
          onChangeReasonToSpare={(value) => setReasonForSparing(value)}
        />
        <button type="submit">Save</button>
      </form>
    </section>
  );
};

export default W12MForm;
