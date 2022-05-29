import React from "react";
import { Section, Button } from "../../styledComponents/GlobalStyle";
import {
  HeroWrapper,
  HeroContent,
  HeroHeader,
  HeaderSub,
  ContentWrapper,
} from "../../styledComponents/heroStyle";
import ScrollTo from "../../scrollFunction";

const Hero = () => {
  const url =
    "cloudinary://123526646435252:tGgdDmD3asKV0ss0AyLqmEkfkaw@hasterisk";
  fetch(url).then(response => response.json()).then(response => console.log(response))

  return (
    <Section id="home">
      <HeroWrapper>
        <HeroContent>
          <ContentWrapper>
            <HeroHeader>quality laundry service in you area</HeroHeader>
            <HeaderSub>We take care about cleanness of your cloth</HeaderSub>
            <Button onClick={() => ScrollTo("services")}>
              explore services
            </Button>
          </ContentWrapper>
        </HeroContent>
      </HeroWrapper>
    </Section>
  );
};

export default Hero;
