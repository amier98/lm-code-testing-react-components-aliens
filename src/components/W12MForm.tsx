import { useState } from "react";
import W12MHeader from "./W12MHeader";
import SpeciesName from "../components/SpeciesName";
import PlanetName from "./PlanetName";
import NumberOfBeings from "./NumberOfBeings";
import AdditionResult from "./AdditionResult";
import ReasonForSparing from "./ReasonForSparing";
import { validateSpeciesName } from "../validation/validate_species_name";
import { validateReasonForSparing } from "../validation/validate_ReasonForSparing";
import { validatePlanetName } from "../validation/validate_PlanetName";
import { validateNumberOfBeings } from "../validation/validate_NumberOfBeings";
import { validateAdditionNumber } from "../validation/validate_WhatIs2+2";

const W12MForm = () => {
  const [speciesNames, setSpeciesName] = useState("");
  const [planetName, setPlanetName] = useState("");
  const [numberofBeings, setNumberOfBeings] = useState(0);
  const [numberResult, setNumberResult] = useState("");
  const [reasonForSparing, setReasonForSparing] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section className="w12MForm">
      <W12MHeader />
      <form onSubmit={handleSubmit}>
        <SpeciesName
          speciesName={speciesNames}
          onChangeSpeciesName={(value) => setSpeciesName(value)}
          validate={validateSpeciesName}
        />
        <PlanetName
          planetName={planetName}
          onChangePlanetName={(value) => setPlanetName(value)}
          validate={validatePlanetName}
        />
        <NumberOfBeings
          beingsNumber={numberofBeings}
          onChangeNumberOfBeings={(value) => setNumberOfBeings(value)}
          validate={validateNumberOfBeings}
        />
        <AdditionResult
          additionResult={numberResult}
          onChangeAdditionResult={(value) => setNumberResult(value)}
          validate={validateAdditionNumber}
        />
        <ReasonForSparing
          reasonToSpare={reasonForSparing}
          onChangeReasonToSpare={(value) => setReasonForSparing(value)}
          validate={validateReasonForSparing}
        />
        <button type="submit">Save</button>
      </form>
    </section>
  );
};

export default W12MForm;
