import React from 'react'
import { Datos } from '../datos/datos'
import { DatosContainer } from './styles'

export const Contenedor_datos = () => {
  return (
    <DatosContainer>
        <Datos 
             imagen="/historia.jpg"
             titulo="HISTORIA"
             parrafo="El estudio jurídico del Dr. Quevedo Gabriel Alejandro, se constituyó en el año 2007
              con asiento originalmente en la calle Dean Funes N° 136, la cual posteriormente fue 
              trasladada a Chacabuco 340 subsuelo departamento “B” el año 2013, local el cual es propio.
               Encontrándose a la fecha funcionando en el mismo lugar."
        />
       <Datos 
             imagen="/graficoCausas.jpg"
             titulo="CANTIDAD DE CAUSAS"
             parrafo="La totalidad de las causas actuales del estudio jurídico es de 285 causas,
              entre ellas, causas Laborales, Familiares, Ejecutivas, Civiles, Declaratorias y Penales."
        />
         <Datos 
             imagen="/exitoCausas.jpg"
             titulo="PORCENTAJE DE EXITO"
             parrafo="En este grafico se puede apreciar, el porcentaje de exito que tiene el estudio
                      sobre las causas que llegan al mismo, demostrando de que sido favorecido con el 75% de aprobacion
                      en base al total de causas que ha llevado."
        />  
        
    </DatosContainer>
  )
}
