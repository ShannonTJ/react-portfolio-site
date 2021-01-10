import React from "react";
import {
  CardContainer,
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
      <ContentContainer>
        <ImageContainer>
          <Image />
        </ImageContainer>
        <TextContainer>
          <HeaderText>Project Title</HeaderText>
          <Text>This is sample text.</Text>
        </TextContainer>
        <LinksContainer>
          <Link>Webpage</Link>
          <Link>Github Repo</Link>
        </LinksContainer>
      </ContentContainer>
    </CardContainer>
  );
};

export default Card;
