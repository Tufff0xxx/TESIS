import styled from "styled-components";

export const DatosContainer = styled.div`

    display:flex;
    flex-direction:column;
    background-color:violet;

    > div:nth-child(2) {
    display: flex;
    flex-direction: row-reverse;
    h2{
        text-align:end;
    }
    p{
        text-align:end;
    }
    }
`