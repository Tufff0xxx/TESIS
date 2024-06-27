import React from 'react'
import { DefinicionesContainer } from './styles'
export const Definiciones = (nombre, texto) => {
  return (
    <DefinicionesContainer>
        <h2>{nombre}</h2>
        <p>{texto}</p>
    </DefinicionesContainer>
  )
}
