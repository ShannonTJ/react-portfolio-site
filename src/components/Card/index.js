import React from "react";

const Card = () => {
  return (
    <CardContainer>
      <ContentContainer>
        <ImageContainer>
          <Image />
        </ImageContainer>
        <TextContainer>
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
