import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled, {css} from 'styled-components'

export const Header = styled.header `
    /* position: fixed; */
    background-color: white;
    width:100%;

    /* *{
        border: 1px solid red;
    } */
`

export const NavBar = styled.nav `
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-inline: 1rem;
    
    @media screen and (min-width:989px){
        padding-inline: unset;
        padding-inline-start: 2rem;
        
    }

`

export const Logo = styled.div `
    display: flex;
    align-items: center;
    gap: .5rem;
    padding-block:2rem;

    @media screen and (min-width:1400px){
        gap :1.5rem ;
    }
`

export const Hamburger = styled.div `
    
`

export const NavMenu = styled.div `
    position: absolute;
    background-color: var(--menu-bg);
    inset: 0;
    padding:1.5rem;
    transform: translateX(-990px);
    transition: transform .7s ease-in-out;
    z-index: 10;

    ${
        props => props.display === "display" && css`
            transform: translateX(0);
        `
    }

    @media screen and (min-width:989px){
        all: unset;
    }
`

export const MakeAppointment = styled.div `
    display: none;
    color: var(--primary-color);
    font-weight: 500;

    @media screen and (min-width:989px){
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    @media screen and (min-width:1400px){
        gap: 2rem;
    }
`

export const StyledFontAwesome = styled(FontAwesomeIcon)`
    color: var(--primary-color);
    font-size: 1.5rem;
    transition: transform var(--transition);

    ${props =>
        props.close && css`
            float: right;
            
             :hover{
                 transform: rotate(45deg);
             }

             @media screen and (min-width: 989px){
                 display: none;
             }
        `
    }
    
    ${
        props => props.logo && css`
            :hover{
                transform: scale(1.2);
            }
            @media screen and (min-width: 989px){
                 display: none;
             }
        `
    }
`

export const CallUs = styled.p`
    background-color: var(--primary-color);
    color: white;
    padding-block:2.5rem;
    padding-inline: 2.5rem;
`

export const Unorder = styled.ul `
    display: flex;
    flex-direction: column;
    gap: .5rem;
    text-align: center;
    margin-block-start:2rem;
    color:var(--primary-color);
    text-transform: capitalize;
    padding-block-start: 2rem;
    font-weight: 700;

    @media screen and (min-width: 989px) {
        flex-direction: row;
        margin-block-start: unset;
        padding-block-start: unset;
        gap: unset;
    }
`

export const List = styled.li `
    transition: all var(--transition);
    padding-block: 1rem;
    cursor: pointer;

    :hover{
        background-color: var(--header-bg);
        border-radius: 1rem;
    }

    @media screen and (min-width: 989px) {
        padding-block: unset;
        padding-inline:.4rem ;
        color: black;

        :hover{
            color: var(--primary-color);
            background-color: transparent;
            /* border-radius: unset; */
        }
    }

    @media screen and (min-width: 1400px) {
        padding-inline:1rem ;

    }
`

export const Icon = styled.img `

`