import React from "react";
import {
  AboutContainer,
  AboutTextCard,
  AboutTextContainer,
  HeaderText,
  Text,
  TextList,
  TextListItem,
  Space,
} from "./AboutElements";

const AboutText = () => {
  return (
    <AboutContainer>
      <AboutTextCard>
        <AboutTextContainer>
          <HeaderText>React / Web Developer</HeaderText>
          <Text>
            I'm a bilingual (fluent in English + French) University of Calgary
            graduate with a BSc in Computer Science. Nice to meet you!
          </Text>
          <Text />
          <Space />
          <Text>
            Some of the languages and technologies I have experience with are:
          </Text>
          <Space />
          <TextList>
            <TextListItem>React</TextListItem>
            <TextListItem>Redux</TextListItem>
            <TextListItem>Express</TextListItem>
            <TextListItem>Node.js</TextListItem>
            <TextListItem>GraphQL</TextListItem>
            <TextListItem>Python</TextListItem>
            <TextListItem>Gatsby</TextListItem>
            <TextListItem>Firebase</TextListItem>
            <TextListItem>MongoDB</TextListItem>
            <TextListItem>JavaScript</TextListItem>
            <TextListItem>HTML</TextListItem>
            <TextListItem>CSS</TextListItem>
          </TextList>
          <Space />
          <Text>More information can be found in my resume.</Text>
        </AboutTextContainer>
      </AboutTextCard>
    </AboutContainer>
  );
};

export default AboutText;
