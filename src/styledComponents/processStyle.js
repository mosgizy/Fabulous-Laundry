import styled from "styled-components";

export const ProcessWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-block-start: 3rem;

    @media screen and (min-width:768px){
        flex-direction: row;
    }
`

export const ProcessItem = styled.div`
    /* display: flex;
    flex-direction: column;
    gap: 2rem; */
    text-align: center;
`