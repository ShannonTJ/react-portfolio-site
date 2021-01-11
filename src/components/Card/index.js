import React from "react";
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
        <ContentContainer>
          <ImageContainer>
            <Image src={"images/svg-5.svg"} />
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
        <ContentContainer>
          <ImageContainer>
            <Image src={"images/svg-5.svg"} />
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
        <ContentContainer>
          <ImageContainer>
            <Image src={"images/svg-5.svg"} />
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
        <ContentContainer>
          <ImageContainer>
            <Image src={"images/svg-5.svg"} />
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
        <ContentContainer>
          <ImageContainer>
            <Image src={"images/svg-5.svg"} />
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
        <ContentContainer>
          <ImageContainer>
            <Image src={"images/svg-5.svg"} />
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
      </CardGroupWrapper>
    </CardContainer>
  );
};

export default Card;
