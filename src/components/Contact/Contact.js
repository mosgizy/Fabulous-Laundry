import React,{useState,useEffect} from "react";
import {
  Section,
  SectionWrapper,
  Button,
  HeaderOne,
  Paragraph,
} from "../../styledComponents/GlobalStyle";
import {
  ContactWrapper,
  ContactInfo,
  InfoWrapper,
  ParaWrapper,
  Link,
  ContactForm,
  InputWrapper,
  Input,
  Message,
  Arrow
} from "../../styledComponents/contactStyle";
import { StyledFontAwesome } from "../../styledComponents/navStyle";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
  faArrowTurnUp
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
    const [show,setShow] = useState("")

    window.addEventListener("scroll",() => {
        if(window.pageYOffset > 700){
            setShow("show")
        }else{
            setShow("")
        }
        console.log(window.pageYOffset > 700)
    })

    useEffect(() => {
        
    })
  return (
    <Section id="contact">
      <SectionWrapper>
        <HeaderOne center title>
          Contact Us
        </HeaderOne>
        <ContactWrapper>
          <ContactInfo>
            <InfoWrapper>
              <StyledFontAwesome icon={faLocationDot} />
              <ParaWrapper>
                <Paragraph>Address</Paragraph>
                <Paragraph>
                  4028 Maryland Avenue, 5604 Willow Crossing Ct, Clifton,
                  Georgia VA, 20124.
                </Paragraph>
              </ParaWrapper>
            </InfoWrapper>
            <InfoWrapper>
              <StyledFontAwesome icon={faPhone} />
              <ParaWrapper>
                <Paragraph>Call Us</Paragraph>
                <Paragraph>
                  (+234) 817 880 1432
                </Paragraph>
              </ParaWrapper>
            </InfoWrapper>
            <InfoWrapper>
              <StyledFontAwesome icon={faEnvelope} />
              <ParaWrapper>
                <Paragraph>Have any questions?</Paragraph>
                <Paragraph>
                  <Link>noreply@gmail.com</Link>
                </Paragraph>
              </ParaWrapper>
            </InfoWrapper>
          </ContactInfo>
          <ContactForm>
            <InputWrapper>
                <Input type="text" placeholder="Name" />
                <Input type="email" placeholder="Email" />
            </InputWrapper>
                <Input type="text" placeholder="Subject" />
            <InputWrapper>
            <Message placeholder="Message"></Message>
            </InputWrapper>
            <InputWrapper>
                <Button>Send Message</Button>
            </InputWrapper>
          </ContactForm>
        </ContactWrapper>
        <Arrow href="#home" show={show}>
            <StyledFontAwesome icon={faArrowTurnUp} />
        </Arrow>
      </SectionWrapper>
    </Section>
  );
};

export default Contact;
