import styled from "styled-components"
import Lupa from "../../assets/LupaDePesquisa.svg"

export const StyledHeader = styled.header`
    background-color: #E2E2FF;
    width: 100vw;
    padding: 30px 0;

`

export const StyledDivHeader = styled.div`
    display: flex; 
    justify-content: space-between;
    align-items: center;
` 

export const StyledInputHeader = styled.input`
    width: 400px;
    height: 35px;
    border-radius: 150px;
    background-image: url(${Lupa});
    background-position: 3%;
    background-repeat: no-repeat;
    border: 1px solid white;
    text-align: center;
    
${(props) =>
props.RemoverInput &&`
    display: none;
`
}
`