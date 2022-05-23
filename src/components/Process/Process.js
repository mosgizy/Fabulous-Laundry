import React from "react";
import {
  Section,
  SectionWrapper,
  Paragraph,
  HeaderOne,
  HeaderTwo,
  Img,
} from "../../styledComponents/GlobalStyle";
import {
  ProcessWrapper,
  ProcessItem,
} from "../../styledComponents/processStyle";
import icon1 from "../../assets/process_icon1.svg";
import icon2 from "../../assets/process_icon2.svg";
import icon3 from "../../assets/process_icon3.svg";

const Process = () => {
  return (
    <Section>
      <SectionWrapper>
        <HeaderOne center title>
          This is how we work
        </HeaderOne>
        <ProcessWrapper>
          <ProcessItem>
            <Img src={icon1} loading='lazy' />
            <HeaderTwo margin>We Collect Your Clothes</HeaderTwo>
            <Paragraph spacing>
              The automated process starts as soon as your clothes go into the
              machine. The outcome is gleaming clothes!
            </Paragraph>
          </ProcessItem>
          <ProcessItem>
            <Img src={icon2} loading='lazy' />
            <HeaderTwo margin>Wash Your Clothes</HeaderTwo>
            <Paragraph spacing>
              The automated process starts as soon as your clothes go into the
              machine. The outcome is gleaming clothes!
            </Paragraph>
          </ProcessItem>
          <ProcessItem>
            <Img src={icon3} loading='lazy'/>
            <HeaderTwo margin>Get Dilivery</HeaderTwo>
            <Paragraph spacing>
              The automated process starts as soon as your clothes go into the
              machine. The outcome is gleaming clothes!
            </Paragraph>
          </ProcessItem>
        </ProcessWrapper>
      </SectionWrapper>
    </Section>
  );
};

export default Process;
