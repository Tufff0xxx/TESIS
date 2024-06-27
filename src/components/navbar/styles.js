import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: blue;
  color: white;
  padding: 15px 50px;
  width: 96%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;

  ul {
    list-style-type: none;
    display: flex;
    gap: 20px;
    margin: 0;
    padding: 0;
  }

  li {
    margin: 0;
    padding: 0;
  }

  a {
    color: white;
    text-decoration: none;
  }
`;

export const NavbarImage = styled.div`
  img {
    width: 50px;
    height: auto;
    border-radius: 50%;
  }
`;

// Añadir un componente espaciador
export const Spacer = styled.div`
  height: 80px; /* Ajusta este valor según la altura de tu Navbar */
`;
