import React from 'react';
import { NavbarContainer, NavbarImage, Spacer } from './styles';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <>
      <NavbarContainer>
        <NavbarImage>
          <img src='/balanzaJuridica.png' alt="Logo" />
        </NavbarImage>
        <ul>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/areas">AREAS DE TRABAJO</Link></li>
          <li><Link to="/formulario">TU CONSULTA</Link></li>
          <li><a href="/abogados">ABOGADOS</a></li>
        </ul>
      </NavbarContainer>
      <Spacer /> {/* Este div añade el margen superior necesario */}
    </>
  )
}
