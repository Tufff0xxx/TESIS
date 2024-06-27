import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Asegura que el contenido esté centrado */
  h2 {
    color: white;
  }
`;

export const Card = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  flex-direction: column;
  width: 350px;
  background-color: black;
  border: 10px solid blue;
  position: relative; /* Necesario para que el botón y el texto se posicionen relativo a la tarjeta */

  img {
    width: 350px;
    height: 250px;
  }

  h2 {
    color: white;
  }

  &:hover button {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const OverlayText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 18px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px;
  border-radius: 5px;
`;

export const ReadMoreButton = styled.button`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 10px;
  background-color: blue;
  color: white;
  border: none;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: bold;
  transition: transform 0.3s ease, opacity 0.3s ease;
  transform: translateY(100%);
  opacity: 0;

  &:hover {
    background-color: aquamarine;
  }
`;
