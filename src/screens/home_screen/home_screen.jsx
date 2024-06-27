import React from 'react'
import { Header } from '../../components/header/header'
import { Formu } from '../../components/form/formu'
import { Navbar } from '../../components/navbar/navbar'
import { Main } from '../../components/main/main'
import { Contenedor_datos } from '../../components/info_estudio/contenedor_datos/contenedor_datos'



export const Home_screen = () => {
    return (
        <>
        
        <Header>
            
        </Header>
        <Contenedor_datos></Contenedor_datos>
        <Main></Main>

        <Formu>

        </Formu></>
    )
        
    
  }