import styled, { css, createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
    }

    html{
        /* colors */

        --primary-color:#6785ff;
        --secondary-color:#6482fd;
        --menu-bg:#eff3ff;
        --header-bg:rgba(103,133,255,.1);
        --menu-list-bg:#4c4c4c;
        --hamburger-bg:#1f1f1f;

        /* transition */
        --transition:.35s ease-in-out;

        /* scrolling */
        scroll-behavior: smooth;
        /* scroll-padding-block-start: 4rem; */

        /* width */
        --tablet:768px;
        --medium-tab:1200px;
        --desktop:1400px;

    }

    body{
        font-family: "Plus Jakarta Sans",sans-serif;

        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    ul{
        list-style-type:none;
    }

    img{
        max-width:100%;
    }

    button{
        font-family: inherit;
    }

    a{
        text-decoration: none;
        color:inherit;
        cursor: pointer;
    }
`;

export const Paragraph = styled.p`
  ${(props) =>
    props.header &&
    css`
      margin-block: 2rem;
    `}

  ${(props) =>
    props.spacing &&
    css`
      line-height: 1.8;
    `}
`;

export const HeaderOne = styled.h1`
  text-transform: capitalize;
  font-size: 1.5rem;

  ${(props) =>
    props.center &&
    css`
      text-align: center;
    `}

  ${(props) =>
    props.title &&
    css`
      background-color: var(--header-bg);
      border-radius: 3rem;
      width: fit-content;
      margin: auto;
      padding: 1rem 3rem;
    `}

    @media screen and (min-width: 768px) {
    font-size: 1.875rem;
  }
`;

export const HeaderTwo = styled.h2`
  ${(props) =>
    props.margin &&
    css`
      margin-block: 2rem;
    `}

  ${(props) =>
    props.primaryColor &&
    css`
      color: var(--primary-color);
    `}
`;

export const Img = styled.img``;

export const Section = styled.section`
  /* min-height: 80vh; */
`;
export const SectionWrapper = styled.div`
  margin: auto;
  padding-block-start: 5.5rem;
  padding-inline: 1rem;

  @media screen and (min-width: 768px) {
    max-width: var(--medium-tab);
  }
`;

export const Link = styled.a``;

export const Button = styled.button`
  outline: none;
  border: none;
  color: white;
  padding: 0.8rem 3rem;
  font-size: 1rem;
  text-transform: capitalize;
  border-radius: 2rem;
  background-color: var(--primary-color);
  position: relative;
  overflow: hidden;

  :before {
    content: "";
    position: absolute;
    inset: 0;
    background-color: #5374f6;
    border-radius: inherit;
    width: 3rem;
    opacity: 20%;
    width: 100%;
    left: -2rem;
    transition: all var(--transition);
  }

  :hover{
    box-shadow:0 0 10px rgba(0,0,0,.3)
  }

  :hover::before {
    background-color: red;
    left: 100%;
  }
`;
