import React from "react";
import {
  Section,
  SectionWrapper,
  Paragraph,
  Button,
  HeaderOne,
  HeaderTwo,
} from "../../styledComponents/GlobalStyle";
import {
  AboutImg,
  AboutContent,
  AboutWrapper,
} from "../../styledComponents/aboutStyle";
import wash from "../../assets/service5.jpg";

const About = () => {
  return (
    <Section id="about">
      <SectionWrapper>
        <HeaderOne center title>about us</HeaderOne>
        <AboutWrapper>
          <AboutImg src={wash} loading="lazy" />
          <AboutContent>
            <HeaderTwo>
              Professional care that is reliable at affordable price
            </HeaderTwo>
            <Paragraph header spacing>
              The automated process starts as soon as your clothes go into the
              machine. The outcome is gleaming clothes! 
              <Paragraph spacing>
                The automated process
                starts as soon as your clothes go into the machine. The outcome is
                gleaming clothes!
              </Paragraph>
            </Paragraph>
            <Button>About Us</Button>
          </AboutContent>
        </AboutWrapper>
      </SectionWrapper>
    </Section>
  );
};

export default About;
