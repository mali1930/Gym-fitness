import React from "react";
import Banner from "../Components/Banner";
import BodyPart from "../Components/BodyPart";
import ExerciseCard from "../Components/ExerciseCard";

import TypeExercises from "../Components/TypeExercises";

const Home = () => {
  return (
    <div>
      <Banner />
      <TypeExercises />
      <BodyPart />
      <ExerciseCard />
    </div>
  );
};

export default Home;
