import React from 'react'
import { AbogadoLogin } from './styles'
import { Navbar } from '../navbar/navbar'
import { AbogadoContainer } from './styles'
import { Footer } from '../footer/footer'
export const Abogado = () => {
  return (

    <>
    <Navbar></Navbar>
    <AbogadoContainer>
    <AbogadoLogin>
        <h1>LOGIN DE ABOGADOS</h1>
        <form action="POST">
        <h2>NOMBRE DE USUARIO</h2>
        <input type="text" />
        <h2>CONTRASEÑA</h2>
        <input type="password" name="" id="" />
        </form>
        <p>Si usted no esta registrado en el sistema, debera crear el usuario</p>
        <button>Crear Usuario</button>

    </AbogadoLogin>
    </AbogadoContainer>
    <Footer></Footer>
   
    
    </>
    
  )
}
