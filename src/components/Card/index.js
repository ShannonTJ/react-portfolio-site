import React from "react";
import { cardData } from "./cardData";
import {
  CardContainer,
  CardGroupWrapper,
  ContentContainer,
  ImageContainer,
  Image,
  TextContainer,
  HeaderText,
  Text,
  LinksContainer,
  Link,
} from "./CardElement";

const Card = () => {
  return (
    <CardContainer>
      <CardGroupWrapper>
        {cardData.map((item) => (
          <ContentContainer key={item.id}>
            <ImageContainer>
              <Image src={item.src} alt={item.alt} />
            </ImageContainer>
            <TextContainer>
              <HeaderText>{item.title}</HeaderText>
              <Text>{item.description}</Text>
            </TextContainer>
            <LinksContainer>
              <Link href={item.webpage}>Webpage</Link>
              <Link href={item.github}>Github</Link>
            </LinksContainer>
          </ContentContainer>
        ))}
      </CardGroupWrapper>
    </CardContainer>
  );
};

export default Card;
