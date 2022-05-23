import styled from 'styled-components'

export const AboutWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    margin-block-start: 2rem;
    
    @media screen and (min-width:768px){
        flex-direction: row;
    }
`

export const AboutImg = styled.img`
    max-width: 100%;
`

export const AboutContent = styled.div`
    
`