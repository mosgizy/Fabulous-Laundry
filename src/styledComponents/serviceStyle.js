import styled from "styled-components";
import servicebg from "../assets/service_bg.png";

export const ServiceWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-block-start: 3rem;

  > * {
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    > * {
        width: 50%;
    }
  }
`;

export const ServiceInfo = styled.div`
  background-image: url(${servicebg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  display: flex;
  padding-block: 9rem;
`;

export const ServiceContent = styled.div`
  color: white;
  text-align: center;
  max-width: 40ch;
  margin: auto;
`;
