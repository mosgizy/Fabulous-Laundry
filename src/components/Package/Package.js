import React from "react";
import {
  Section,
  SectionWrapper,
  Button,
  HeaderOne,
  HeaderTwo,
} from "../../styledComponents/GlobalStyle";
import {
  PackageWrapper,
  PackageInfo,
  Sub,
  Sup,
  Price,
  Span,
  ListWrapper,
  List
} from "../../styledComponents/packageStyle";

const Package = () => {
  return (
    <Section>
      <SectionWrapper>
        <HeaderOne center title>
          Laundry Service Package
        </HeaderOne>
        <PackageWrapper>
          <PackageInfo>
              <Price>
                  <HeaderOne><Sup>$</Sup><Span>19</Span><Sub>/month</Sub></HeaderOne>
              </Price>
              <HeaderTwo primaryColor>Basic</HeaderTwo>
              <ListWrapper>
                  <List>4 t-shirt</List>
                  <List>1 pair of jeans</List>
                  <List>3 button-down shirts</List>
                  <List>1 pair of shorts</List>
                  <List>7 pairs of underwear</List>
                  <List>6 pairs of socks</List>
                  <List>1 towel</List>
                  <List>1 set of sheets</List>
                  <List>1 set of sheets (every other week)</List>
              </ListWrapper>
              <Button>CHOOSE PLAN</Button>
          </PackageInfo>
          <PackageInfo>
              <Price>
                  <HeaderOne><Sup>$</Sup><Span>29</Span><Sub>/month</Sub></HeaderOne>
              </Price>
              <HeaderTwo primaryColor>Regular Plan</HeaderTwo>
              <ListWrapper>
                  <List>4 t-shirt</List>
                  <List>1 pair of jeans</List>
                  <List>3 button-down shirts</List>
                  <List>1 pair of shorts</List>
                  <List>7 pairs of underwear</List>
                  <List>6 pairs of socks</List>
                  <List>1 towel</List>
                  <List>1 set of sheets</List>
                  <List>1 set of sheets (every other week)</List>
              </ListWrapper>
              <Button>CHOOSE PLAN</Button>
          </PackageInfo>
          <PackageInfo>
              <Price>
                  <HeaderOne><Sup>$</Sup><Span>39</Span><Sub>/month</Sub></HeaderOne>
              </Price>
              <HeaderTwo primaryColor>Premium Plan</HeaderTwo>
              <ListWrapper>
                  <List>4 t-shirt</List>
                  <List>1 pair of jeans</List>
                  <List>3 button-down shirts</List>
                  <List>1 pair of shorts</List>
                  <List>7 pairs of underwear</List>
                  <List>6 pairs of socks</List>
                  <List>1 towel</List>
                  <List>1 set of sheets</List>
                  <List>1 set of sheets (every other week)</List>
              </ListWrapper>
              <Button>CHOOSE PLAN</Button>
          </PackageInfo>
        </PackageWrapper>
      </SectionWrapper>
    </Section>
  );
};

export default Package;
