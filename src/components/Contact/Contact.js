import React, { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
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
  Arrow,
} from "../../styledComponents/contactStyle";
import { StyledFontAwesome } from "../../styledComponents/navStyle";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
  faArrowTurnUp,
} from "@fortawesome/free-solid-svg-icons";
import ScrollTo from '../../scrollFunction'

const Contact = () => {
  const form = useRef(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  const [show, setShow] = useState("");

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 700) {
      setShow("show");
    } else {
      setShow("");
    }
    console.log(window.pageYOffset > 700);
  });

  const api_key = ""

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("Fabulous", "fabulous", form.current, api_key.emailjs)
      .then(
        (result) => {
          if (result.text === "OK") {
            setName("");
            setEmail("");
            setSubject("");
            setMessage("");
            setError(true);
          }
        },
        (error) => {
          // console.log(error.text);
          setError(false);
        }
      );
  };

  useEffect(() => {
    setTimeout(() => {
      setError(false);
    }, 1000);
  }, [error]);

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
                <Paragraph>(+234) 817 880 1432</Paragraph>
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
          <ContactForm ref={form} onSubmit={sendEmail}>
            <Paragraph error>{error && "message successfully sent"}</Paragraph>
            <InputWrapper>
              <Input
                type="text"
                name="user_name"
                id="name"
                value={name}
                placeholder="Name"
              />
              <Input
                type="email"
                name="user_email"
                id="email"
                value={email}
                placeholder="Email"
              />
            </InputWrapper>
            <Input
              type="text"
              name="user_subject"
              id="subject"
              value={subject}
              placeholder="Subject"
            />
            <InputWrapper>
              <Message
                name="message"
                id="message"
                value={message}
                placeholder="Message"
              ></Message>
            </InputWrapper>
            <InputWrapper>
              <Button type="submit">Send Message</Button>
            </InputWrapper>
          </ContactForm>
        </ContactWrapper>
        <Arrow onClick={() => ScrollTo("home")} show={show}>
          <StyledFontAwesome icon={faArrowTurnUp} />
        </Arrow>
      </SectionWrapper>
    </Section>
  );
};

export default Contact;
