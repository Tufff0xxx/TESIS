import React from 'react';
import { Container, Card, OverlayText, ReadMoreButton } from './styles';

export const Causa = ({ titulo, imagen, texto }) => {
  return (
    <Container>
      <h2>{titulo}</h2>
      <Card>
        <img src={imagen} alt={titulo} />
        <OverlayText>{texto}</OverlayText>
        <ReadMoreButton>Leer más</ReadMoreButton>
      </Card>
    </Container>
  );
}
