import styled from 'styled-components'
import herobg from '../assets/hero_bg.webp'
import herobg2 from '../assets/hero_bg5.jpeg'

export const HeroWrapper = styled.div`
    background-image: url(${herobg2});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    min-height: 50vh;
    position: relative;

    ::before{
        content:"";
        position: absolute;
        left:0;
        right: 60%;
        top: 0;
        bottom: 0;
        background: linear-gradient(to right,#2f364b ,transparent);
    }
    
    @media screen and (min-width:768px){
        background-image: url(${herobg});
        min-height: 80vh;
    }
`

export const HeroContent = styled.div`
    max-width: var(--medium-tab);
    color: white;
    padding-inline:1rem;
    position: absolute;
    top:25%;
    width: 100%;

    @media screen and (min-width:768px){
        padding-inline-start: 10rem;
        top:40%;
        
    }

    @media screen and (min-width:1400px){
        padding-inline-start: 15rem;
    }
`

export const ContentWrapper = styled.div`
    max-width: 50ch;
    
`

export const HeroHeader = styled.h1`
    text-transform: capitalize;
    font-size: 2em;
    line-height: 1.2;
`

export const HeaderSub = styled.p`
    font-size: 1.3rem;
    margin-block: 2rem;
`