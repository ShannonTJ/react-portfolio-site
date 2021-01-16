import React from "react";
import {
  AboutContainer,
  AboutTextCard,
  AboutTextContainer,
  HeaderText,
  Text,
} from "./AboutElements";

const AboutText = () => {
  return (
    <AboutContainer>
      <AboutTextCard>
        <AboutTextContainer>
          <HeaderText>React | Web Developer</HeaderText>
          <Text>
            I'm a bilingual (English + French) University of Calgary graduate
            with a BSc in Computer Science. When I'm not programming, I'm making
            art!
          </Text>
        </AboutTextContainer>
      </AboutTextCard>
    </AboutContainer>
  );
};

export default AboutText;
