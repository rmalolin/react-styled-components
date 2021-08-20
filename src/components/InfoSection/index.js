import React from "react";
import { Button } from "react-scroll";
import { Column2, ImgWrap } from "./InfoElements";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
} from "./InfoElements";

export const Info = () => {
  return (
    <InfoContainer id={id}>
      <InfoWrapper>
        <InfoRow>
          <Column1>
            <TextWrapper>
              <TopLine>TopLine</TopLine>
              <Heading>Heading</Heading>
              <Subtitle>Subtitle</Subtitle>
              <BtnWrap>
                <Button to="home">Button</Button>
              </BtnWrap>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrap>
              <Img />
            </ImgWrap>
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
  );
};

export default Info;