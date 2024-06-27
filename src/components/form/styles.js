import styled from "styled-components";


export const ContainerForm = styled.div`

background-image: url("/fondo4.jpg");

`

export const TitleContainer = styled.div`
  
  height: 100px;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    color: white;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }
`;

export const FormularioContainer = styled.div`
background-image: url("/fondo2.jpg");
  text-align:center;
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  form {
    display: flex;
    flex-direction: column;
  }

  label {
    font-weight: bold;
    margin-bottom: 8px;
  }

  input,
  textarea {
    padding: 8px;
    margin-bottom: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
  }

  textarea {
    height: 120px; /* Ajusta la altura del textarea según sea necesario */
    resize: vertical; /* Permite redimensionar verticalmente el textarea si es necesario */
  }

  button {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #0056b3;
    }
  }
`;
