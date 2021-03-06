import React from "react";
import {
  Container,
  TextCard,
  TextContainer,
  HeaderText,
  Text,
  Image,
} from "../components/About/AboutElements";

const NotFound = () => {
  return (
    <>
      <Container>
        <TextCard>
          <TextContainer>
            <HeaderText>404 not found</HeaderText>
            <Text>That page doesn't seem to exist.</Text>
            <p></p>
            <Text>Rediscover civilization with the links above.</Text>
          </TextContainer>
          <Image src="images/cute-cat.jpg" />
        </TextCard>
      </Container>
    </>
  );
};

export default NotFound;
