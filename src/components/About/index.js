import React from "react";
import {
  AboutContainer,
  AboutTextCard,
  AboutTextContainer,
  HeaderText,
  Text,
  TextList,
  TextListItem,
} from "./AboutElements";

const AboutText = () => {
  return (
    <AboutContainer>
      <AboutTextCard>
        <AboutTextContainer>
          <HeaderText>React / Web Developer</HeaderText>
          <Text>
            I'm a bilingual (English + French) University of Calgary graduate
            with a BSc in Computer Science. Nice to meet you!
          </Text>
          <Text />
          <Text>
            <p>
              Below are the frameworks and languages I have experience with:
            </p>
          </Text>

          <TextList>
            <TextListItem>React</TextListItem>
            <TextListItem>Redux</TextListItem>
            <TextListItem>Express</TextListItem>
            <TextListItem>Node.js</TextListItem>
            <TextListItem>npm</TextListItem>
            <TextListItem>Python</TextListItem>
            <TextListItem>Python</TextListItem>
            <TextListItem>Python</TextListItem>
            <TextListItem>Python</TextListItem>
            <TextListItem>Python</TextListItem>
            <TextListItem>Python</TextListItem>
            <TextListItem>Python</TextListItem>
          </TextList>
        </AboutTextContainer>
      </AboutTextCard>
    </AboutContainer>
  );
};

export default AboutText;
