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
  ServiceWrapper,
  ServiceInfo,
  ServiceContent,
} from "../../styledComponents/serviceStyle";
import service1 from "../../assets/service.webp";
import service2 from "../../assets/service2.png";
import icon from "../../assets/service_icon.png";

const Services = () => {
  return (
    <Section id="services">
      <SectionWrapper>
        <HeaderOne title>Services we offer</HeaderOne>
        <ServiceWrapper>
          <Img src={service1} />
          <ServiceInfo>
            <ServiceContent>
              <Img src={icon} />
              <HeaderTwo margin>Cloth Laundry</HeaderTwo>
              <Paragraph spacing>
                The automated process starts as soon as your clothes go into the
                machine. The outcome is gleaming clothes!!
              </Paragraph>
            </ServiceContent>
          </ServiceInfo>
          <ServiceInfo>
            <ServiceContent>
              <Img src={icon} />
              <HeaderTwo margin>Cloth Ironing</HeaderTwo>
              <Paragraph spacing>
                The automated process starts as soon as your clothes go into the
                machine. The outcome is gleaming clothes!!
              </Paragraph>
            </ServiceContent>
          </ServiceInfo>
          <Img src={service2} />
        </ServiceWrapper>
      </SectionWrapper>
    </Section>
  );
};

export default Services;
