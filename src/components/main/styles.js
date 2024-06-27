import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  background-color:black;
  
  h1 {
    text-align: center;
    background-color: blue;
    color: white;
    padding: 10px 0;
  }
`;

export const CausasContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
  justify-content: center;
  align-items: center;
  gap: 20px; /* Espacio entre los elementos */
  background-color: black;
  padding: 20px;
`;

export const CausaContainer = styled.div`
  flex: 1 1 30%; /* Ajusta el tamaño de los elementos para que ocupen aproximadamente un tercio del contenedor */
  max-width: 30%; /* Limita el tamaño máximo para que no se estiren demasiado */
  box-sizing: border-box;
`;
