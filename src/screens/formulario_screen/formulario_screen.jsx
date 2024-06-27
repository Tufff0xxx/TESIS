import React from 'react'
import { Navbar } from '../../components/navbar/navbar'
import { Formu } from '../../components/form/formu'
import { Footer } from '../../components/footer/footer'
import { Cliente_screen } from '../cliente_screen/cliente_screen'

export const Formulario_screen = () => {
  return (
    <> 
    <Formu></Formu>
    <Cliente_screen></Cliente_screen>
    <Footer></Footer>
     </>
    
  )
}
