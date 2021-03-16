import React from "react";
import { cardData } from "./cardData";
import {
  CardContainer,
  CardGroupWrapper,
  ContentContainer,
  ImageContainer,
  SvgImage,
  TextContainer,
  HeaderText,
  Text,
  LinksContainer,
  ButtonLink,
} from "./CardElements";

const Card = () => {
  return (
    <CardContainer>
      <CardGroupWrapper>
        {cardData.map((item) => (
          <ContentContainer key={item.id}>
            <ImageContainer>
              <SvgImage src={item.src} alt={item.alt} />
            </ImageContainer>
            <TextContainer>
              <HeaderText>{item.title}</HeaderText>
              <Text>{item.description}</Text>
            </TextContainer>
            <LinksContainer>
              <ButtonLink target="_blank" to={{ pathname: item.webpage }}>
                Webpage
              </ButtonLink>
              <ButtonLink target="_blank" to={{ pathname: item.github }}>
                Github
              </ButtonLink>
            </LinksContainer>
          </ContentContainer>
        ))}
      </CardGroupWrapper>
    </CardContainer>
  );
};

export default Card;
