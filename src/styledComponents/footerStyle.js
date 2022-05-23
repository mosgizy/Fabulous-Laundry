import styled,{css} from 'styled-components'
import footerbg from '../assets/footer-bg.webp'

export const Foot = styled.footer`
    background-image: url(${footerbg});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: bottom center;
    padding-block-start: 5rem;
`

export const Footerwrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
    padding-inline: 1.2rem;
    
    @media screen and (min-width:768px){
        flex-direction: row;
        justify-content: space-between;
        gap: unset;

        > * {
            flex-basis: 28%;
            width: 28%;
        }
    }
    `

export const FooterContent = styled.div`
    ${
        props => props.flex && css`
            display: flex;
            flex-direction: column;
            gap: 2rem;
        `
    }

`

export const IconWrapper = styled.div`
    display: flex;
    gap: 2rem;
    margin-block-start: 2.5rem;
`

export const FontIcon = styled.div`
    background-color: var(--header-bg);
    width: 2.5rem;
    height: 2.5rem;
    text-align: center;
    border-radius: 50%;
    transition: all var(--transition);
    position: relative;

    > *{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }

    :hover{
        background-color: var(--secondary-color);
    }
    
    :hover > *{
        color: white;
    }
`

export const Copyright = styled.div`
    text-align: center;
    margin-block-start: 6rem;
    padding-block-end: 2rem;
`