import React from "react";
import { Container, Section, Line } from "../globalComponents";
import ExperienceCard from "./experienceCard";
import { experienceData } from "./experienceData";

const Experience = () => {
  return (
    <Section color="#e5e5e5">
      <Container>
        <h2>Where I've Worked.</h2>
        <Line marginTop={0} />
      </Container>
      <Container flex={true}>
        {experienceData.map((experience) => (
          <ExperienceCard key={experience.id} experience={experience} />
        ))}
      </Container>
      {/* <Container>
        <Line marginTop={"50px"} />
      </Container> */}
    </Section>
  );
};

export default Experience;
