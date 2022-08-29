import React from "react";
import styled from "styled-components";
import { Container, Section, Line, Heading2 } from "../globalComponents";
import ExperienceCard from "./experienceCard";
import {
  CURRENT_EXPERIENCE,
  PAST_EXPERIENCE,
} from "../../content/experienceData";
import Grid from "@mui/material/Grid";

const WorkContainer = styled.div`
  max-width: 400px;
  min-width: 250px;
  width: 400px;
  margin-right: 20px;
`;

const Experience = () => {
  return (
    <Section>
      <Container flex={true}>
        <Grid container spacing={1} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
            <WorkContainer>
              <Heading2>Where I'm Working.</Heading2>
              <Line marginTop={0} />
              {CURRENT_EXPERIENCE.map((experience) => (
                <ExperienceCard
                  key={CURRENT_EXPERIENCE.indexOf(experience)}
                  experience={experience}
                />
              ))}
            </WorkContainer>
          </Grid>

          <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
            <WorkContainer>
              <Heading2>Where I've Worked.</Heading2>
              <Line marginTop={0} />
              {PAST_EXPERIENCE.map((experience) => (
                <ExperienceCard
                  key={PAST_EXPERIENCE.indexOf(experience)}
                  experience={experience}
                />
              ))}
            </WorkContainer>
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
};

export default Experience;
