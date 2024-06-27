import React from 'react'
import { Navbar } from '../../components/navbar/navbar'
import { Contenedor_datos } from '../../components/info_estudio/contenedor_datos/contenedor_datos'
import { Main } from '../../components/main/main'
import { container_definiciones } from '../../components/definiciones_contenedor/contenedor/container_definiciones'
export const Areas_screen = () => {
  return (
    <>
        <Navbar></Navbar>
        
        <Main></Main>
        <container_definiciones></container_definiciones>
    </>
    

    
  )
}
