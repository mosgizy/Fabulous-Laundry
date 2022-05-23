import styled,{css} from 'styled-components'
import { keyframes } from 'styled-components'

export const ContactWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;
    margin-block-start: 3rem;

    @media screen  and (min-width:768px){
        flex-direction: row;
    }

    @media screen  and (min-width:989px){
        padding-inline-end: 3rem;
    }
`

export const ContactInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap:2rem;
    flex:1 1 40%;
`

export const InfoWrapper = styled.div`
    display: flex;
    gap: 1.5rem;
`

export const ParaWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap:.5rem;
`

export const Link = styled.a`
    text-decoration: underline;
    cursor: pointer;
`

export const ContactForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1.4rem;
    flex: 1 1 58%;
`
export const InputWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1.2rem;
`

export const Input = styled.input`
    padding:.5rem 1rem;
    font-size: 1.2rem;
    border: 1px solid var(--secondary-color);
    outline: none;
    color: var(--hamburger-bg);

    flex: 1 1 48%;
`

export const Message = styled.textarea`
    min-height: 10vh;
    padding: .5rem 1rem;
    font-size: 1.2rem;
    border: 1px solid var(--secondary-color);
    outline: none;
    color: var(--hamburger-bg);
    flex: 1 1 48%;
`


const heartbeat = keyframes`
    from{
        transform: scale(.89);
    }
    to{
        transform: scale(1);
    }
`

export const Arrow = styled.a`
    display: none;
    width: 3.5rem;
    height: 3.5rem;
    background-color: var(--header-bg);
    border: 1px solid var(--primary-color);
    border-radius: 50%;
    mix-blend-mode: difference;
    position: fixed;
    right: 2%;
    top: 65%;
    z-index: 12;
    animation: ${heartbeat} 1.5s infinite alternate;

    > *{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }

    ${
        props => props.show === "show" && css`
            display: block;
        `
    }
`