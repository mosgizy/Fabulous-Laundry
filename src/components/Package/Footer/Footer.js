import React from "react";
import {
  SectionWrapper,
  Img,
  Paragraph,
  HeaderTwo,
  Link,
} from "../../../styledComponents/GlobalStyle";
import {
  Foot,
  FooterContent,
  IconWrapper,
  Footerwrapper,
  FontIcon,
  Copyright,
} from "../../../styledComponents/footerStyle";
import { StyledFontAwesome } from "../../../styledComponents/navStyle";
import { ListWrapper, List } from "../../../styledComponents/packageStyle";
import laundry from "../../../assets/laundry-icon.png";
import {
  faTwitter,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <Foot>
      <SectionWrapper>
        <Footerwrapper>
          <FooterContent>
            <Img src={laundry} loading='lazy'/>
            <Paragraph spacing header>
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla.
            </Paragraph>
            <IconWrapper>
              <FontIcon>
                <StyledFontAwesome icon={faTwitter} />
              </FontIcon>
              <FontIcon>
                <StyledFontAwesome icon={faFacebook} />
              </FontIcon>
              <FontIcon>
                <StyledFontAwesome icon={faInstagram} />
              </FontIcon>
            </IconWrapper>
          </FooterContent>
          <FooterContent flex>
            <HeaderTwo>Services</HeaderTwo>
            <ListWrapper dash>
              <List>Dry Cleaning</List>
              <List>Starching</List>
              <List>Ironing services</List>
              <List>laundry Service</List>
              <List>Laundry</List>
            </ListWrapper>
          </FooterContent>
          <FooterContent>
            <HeaderTwo>Get in touch</HeaderTwo>
            <Paragraph header>(+234) 812 321 3456</Paragraph>
            <Link>noreply@gmail.com</Link>
            <Paragraph header>789/A, Green road NYC-9089</Paragraph>
          </FooterContent>
        </Footerwrapper>
        <Copyright>
          Copyright &copy; <span>2022</span> All Rights reserved
        </Copyright>
      </SectionWrapper>
    </Foot>
  );
};

export default Footer;
