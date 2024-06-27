import React from 'react'
import { InfoContainer } from './styles';
import { InfoImage, InfoLetra } from './styles';
export const Datos = ({ titulo, imagen,parrafo }) => {
  return (
    <InfoContainer>
      <InfoImage>
        
        <img src={imagen} alt={titulo} />
        </InfoImage>
        <InfoLetra>
        <h2>{titulo}</h2>
        <p>{parrafo}</p>
        </InfoLetra>
        
      
    </InfoContainer>
  );
}
