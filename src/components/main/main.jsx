import React from 'react';
import { MainContainer, CausasContainer } from './styles';
import { Causa } from './causas/causa';

export const Main = () => {
  return (
    <MainContainer>
      <h1>CAUSAS CON LAS QUE TRABAJA EL ESTUDIO</h1>
      <CausasContainer>
        <Causa titulo="Laboral" imagen="/laboral.jfif" texto="Despidos sin causa, maltrato laboral"/>
        <Causa titulo="Familiar" imagen="/familiar.webp"texto="Manutencion impaga, tenencia compartida" />
        <Causa titulo="Ejecutiva" imagen="/ejecutiva.webp" texto="Ni puta idea un ejemplo de esto"/>
        <Causa titulo="Declaratoria de herederos" imagen="/declaratoria.jpg" texto="De herederosn, por terrenos" />
        <Causa titulo="Penales" imagen="/penales.jpg" texto="Juicios, exoneraciones"/>
        <Causa titulo="Civiles" imagen="/civil.jfif" texto="demandas por daños y perjuicios"/>
      </CausasContainer>
    </MainContainer>
  );
}
