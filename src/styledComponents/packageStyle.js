import styled,{css} from 'styled-components'

export const PackageWrapper = styled.div`
    margin-block-start: 3rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    
    @media screen and (min-width:768px){
        flex-direction: row;
    }
`

export const PackageInfo = styled.div`
    background-color: var(--header-bg);
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem;
    position: relative;
    transition: box-shadow var(--transition);

    ::before{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 0%;
        height: .3rem;
        background-color: var(--primary-color);
        transition: width var(--transition);
    }

    :hover::before{
        width: 100%;
    }

    :hover{
        box-shadow: 2px 15px 15px rgba(0,0,0,.2);
    }
`

export const Price = styled.div`
    display: flex;
`

export const Sup = styled.sup`
    font-weight: 400;
    font-size: 1.2rem;
`

export const Sub = styled.sub`
    font-weight: 400;
    font-size: 1rem;
    color: rgba(0,0,0,.7);
`

export const Span = styled.span`

`

export const ListWrapper = styled.ul`
    list-style-type: circle;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    ${
        props => props.dash && css`
            list-style-type: disc;
        `
    }
`

export const List = styled.li`
    padding-inline-start: .5rem;
`